const Controller = require('egg').Controller
const sqlquery = require('../utils/sqlquery.js')

class BusinessController extends Controller {
  async getList() {
    const {ctx, app} = this
    let l = await app.mysql.query( `SELECT * FROM api_business AS app LEFT JOIN api_businessdetail as de ON app.detail_id=de.id ORDER BY app.id LIMIT 0, 10;`)
    ctx.body = l
  }
}
module.exports = BusinessController
