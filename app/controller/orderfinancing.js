'use strict'
const Controller = require('egg').Controller
const sqlquery = require('../utils/sqlquery.js')
const async = require('async')

class orderFinancingController extends Controller {
  async usage () {
    const {ctx, app} = this
    let { query } = ctx
    if (query.financing_id) {
      let getContractId = await app.mysql.query(sqlquery.find('api_orderfinancingapplication_sales_contract_list', `WHERE orderfinancingapplication_id=${query.financing_id}`, 'contract_id'))
      let contract = await app.mysql.query(sqlquery.find('api_contract', `WHERE id=${getContractId[0].contract_id}`, 'id, name, partner, chain_id'))
      let orders = await app.mysql.query(sqlquery.find('api_order', `WhERE contract_id=${contract[0].id}`))
      let arr = []
      for (let i = 0; i < orders.length; i++) {
        let a = await app.mysql.query(sqlquery.find('api_deposit', `WHERE order_id=${orders[i].id};`))
        orders[i].deposit_list = a
      }
      ctx.body = {contract, orders}
    } else {
      ctx.body = {code: 0, errMsg: '无效的参数'}
    }
  }
  async coverPool () {
    const {ctx, app} = this
    const {query} = ctx
    if (query.financing_id) {
      let list = await app.mysql.query(`SELECT inv.value, inv.id, inv.contract_id, inv.payment_id, inv.create_time FROM api_orderfinancingapplication_invoice_list AS app LEFT JOIN api_invoice as inv ON app.invoice_id=inv.id WHERE orderfinancingapplication_id=23;`)
      for (let i = 0; i < list.length; i++) {
        let cname = await app.mysql.query(sqlquery.find('api_contract', `WHERE id=${list[i].contract_id}`, 'name,partner'))
        list[i].contract_name = cname[0].name
        list[i].partner = cname[0].partner
        // typeList: ['现金', '支票', '汇票（商汇）', '汇票（银汇）', '汇票（信用证）']
        if (list[i].payment_id) {
          let sq = await app.mysql.query(sqlquery.find('api_payment', `WHERE id=${list[i].payment_id}`, 'type,create_time'))
          if (sq[0].type === '0' || sq[0].type === '1') list[i].ticket_type = 0
          if (sq[0].type === '2') list[i].ticket_type = 1
          if (sq[0].type === '3' || sq[0].type === '4') list[i].ticket_type = 2
          list[i].payment_type = sq[0].type
          list[i].afford_date = sq[0].create_time
          list[i].using = false
        } else {
          list[i].ticket_type = 0
        }
      }
      ctx.body = list
    } else {
      ctx.body = {code: '-1', errMsg: '无效的参数'}
    }
  }
}
module.exports = orderFinancingController
