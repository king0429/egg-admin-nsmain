const db = require('../../db.js');
const Controller = require('egg').Controller;

// console.log(db)

class chainController extends Controller {
  async chain() {
    // console.log(this.ctx.query)
    this.ctx.body = this.ctx.query
  }
  async contract () {
    let { query } = this.ctx
    let s = {}
    if (query.type && query.id) {
      db.forEach(item => {
        if (item.id === query.id) {
          s = item
        }
      })
      if (s.id) {
        // 应收合同
        if (query.type === '1') {
          let a = [
            [{id: s.id, parnter_business: s.sales_contract.partner_business, contract_name: s.sales_contract.contract_name, date_created: s.sales_contract.date_created, code: '1'}],
            s.sales_contract.plan ? [s.sales_contract.plan] : [],
            !s.sales_contract.warehouse_contract || s.sales_contract.warehouse_contract.length === 0 ? [] : s.sales_contract.warehouse_contract,
            !s.sales_contract.logistics_contract || s.sales_contract.logistics_contract.length === 0 ? [] : s.sales_contract.logistics_contract,
            s.sales_contract.role ? s.sales_contract.role : [],
            s.sales_contract.financing_plan ? [s.sales_contract.financing_plan] : []
          ]
          this.ctx.body = {data: a, code: '1'}
        } else {
          // 应付合同 (array)
        }
      } else {
        this.ctx.body = {
          code: '0',
          errMsg: '无效的参数'
        }
      }
    } else {
      this.ctx.body = {code: -1, errMsg: '无效的参数'}
    }
  }
  async order () {
    let { query } = this.ctx
    if (query.type === '1') {
      let s = {}
      db.forEach(item => {
        if (item.id === query.id) {
          s = item
        }
      })
      if (s.id) {
        let a = [
          s.sales_contract.order,
          s.sales_contract.deposite,
          s.sales_contract.warehouse,
          s.sales_contract.transport,
          s.sales_contract.acceptence
        ]
        this.ctx.body = {data: a, code: '1'}
      } else {
        this.ctx.body = {
          code: '0',
          errMsg: '无效的参数'
        }
      }
    } else {
      this.ctx.body = '无效的参数'
    }
  }
  async settlement () {
    let { query } = this.ctx
    if (query.type === '1') {
      let s = {}
      db.forEach(item => {
        if (item.id === query.id) {
          s = item
        }
      })
      if (s.id) {
        let a = [
          s.sales_contract.settlement,
          s.sales_contract.invoice,
          s.sales_contract.payment
        ]
        this.ctx.body = {
          data: a, code: '1'
        }
      } else {
        this.ctx.body = {
          code: '0',
          errMsg: '无效的参数'
        }
      }
    } else {}
  }
  async contract_settlement () {
    let { query } = this.ctx
    if (query.type === '1') {
      let s = {}
      db.forEach(item => {
        if (item.id === query.id) {
          s = item
        }
      })
      if (s.id) {
        let a = [s.sales_contract.contract_settlement]

        this.ctx.body = {
          data: a, code: '1'
        }
      } else {
        this.ctx.body = {
          code: '0',
          errMsg: '无效的参数'
        }
      }
    } else {}
  }
}
module.exports = chainController
