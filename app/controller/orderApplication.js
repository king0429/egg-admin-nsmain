const Controller = require('egg').Controller
const sqlquery = require('../utils/sqlquery.js')
const fs = require('fs')
const contractList = require('../mock/contract.js')
const orderList = require('../mock/order.js')
const depositList = require('../mock/deposit.js')

// console.dir(orderList)
class OrderApplication extends Controller {
	async getContractList () {
		const { ctx, app } = this
		let c = contractList.get(5)
		let o = orderList.getData(10)
		let d = depositList.getData(20)
		d.forEach((val, index) => {
			if (index % 2 === 0 && index !== 10) o[index / 2].deposit = [d[index], d[index + 1]]
		})
		o.forEach((val, index) => {
			if (index % 2 === 0) c[index / 2].order = [o[index], o[index + 1]]
		})
		ctx.body = {code: 1, c}
	}
	async getFirst () {
		const {ctx, app} = this
		const { ctx, app } = this
		let c = contractList.get(2)
		let o = orderList.getData(4)
		let d = depositList.getData(8)
		d.forEach((val, index) => {
			if (index % 2 === 0 && index !== 8) o[index / 2].deposit = [d[index], d[index + 1]]
		})
		o.forEach((val, index) => {
			if (index % 2 === 0) c[index / 2].order = [o[index], o[index + 1]]
		})
		ctx.body = {code: 1, c}
	}
}
module.exports = OrderApplication
