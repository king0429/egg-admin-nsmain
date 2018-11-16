'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  // console.dir(controller)
  router.get('/', controller.home.index);
  router.get('/chain', controller.chain.chain)
  router.get('/chain/contract', controller.chain.contract)
  router.get('/chain/order', controller.chain.order)
  router.get('/chain/settlement', controller.chain.settlement)
  router.get('/chain/contract_settlement', controller.chain.contract_settlement)
  router.get('/test', controller.test.index)
  router.get('/test/database_connection', controller.test.db)
  router.get('/test/view', controller.test.view)
  router.get('/test/viewlist', controller.test.showtables)
  // 订单融资
  router.get('/api/orderfinancing/usage', controller.orderfinancing.usage)
  // 担保池
  router.get('/api/orderfinancing/cover_pool', controller.orderfinancing.coverPool)
  // 其他担保列表
  router.get('/api/orderfinancing/assure', controller.orderfinancing.assure)
  // 企业申请订单融资
  router.get('/api/order_application/contract', controller.orderApplication.getContractList)
  // 订单生成的第一还款来源
  router.get('/api/order_application/get_first', controller.orderApplication.getContractList)
  // 获取企业列表
  router.get('/api/business', controller.business.getList)
};
