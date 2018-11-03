'use strict'

const Controller = require('egg').Controller
const sqlquery = require('../utils/sqlquery.js')
console.log(sqlquery.find)

class TestController extends Controller {
  async index () {
    this.ctx.body = {code: '909', errMsg: 'enter test', a}
  }
  async db () {
    // console.log(this.app.mysql.get('api_business'))
    // lst data = this.app.mysql.get('api_business')
    const that = this
    console.log(this.middleware)
    let a = await this.app.mysql.query(sqlquery.findAll('api_chain'))
    this.ctx.body = {code: 400, a}
  }
  async view () {
    const { ctx, app } = this
    const { query } = ctx
    var pagenation = '', tn
    query.table_name ?  tn = query.table_name : tn = 'api_business'
    if (!query.p || query.p === '1') {
      pagenation = 'ORDER BY id LIMIT 0,10 '
    } else {
      pagenation = `LIMIT ${(Number(query.p) - 1) * 10},${query.page_size ? query.page_size : 10}`
    }
    // consoe.log(sqlquery.find('api_business', 'name, id', pagenation))
    let tt = await app.mysql.query(`SHOW FULL COLUMNS FROM mock_data_nsmain.${tn};`);
    let a = await app.mysql.query(sqlquery.find(tn, '*', pagenation))
    await ctx.render('index.ejs', {a, title: '列表', tn, tt})
    // ctx.body = {a, title: '企业列表', query: sqlquery.find('api_business', 'name, id', pagenation), tt}
  }
  async showtables () {
    const {ctx, app} = this
    const query = { ctx }
    let list = await app.mysql.query('show TABLES;');
    console.log(list)
    await ctx.render('list.ejs', {list})
    // ctx.body = {code: 1, list}
  }
}

module.exports = TestController
