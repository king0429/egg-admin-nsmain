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
  router.get('/api/orderfinancing/cover_pool', controller.orderfinancing.coverPool)
};
