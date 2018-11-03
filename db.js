'use strict';
let cid = 0
let chain_id = 0
const sales_contract = {
  id: (cid++).toString(),
  partner_business: '交易公司',
  contract_name: '合同名称',
  status: '1',
  date_created: '2018-10-10',
  // 计划订单
  plan: {status: '2', name: '计划订单'},
  // 仓储合同
  warehouse_contract: [],
  // 物流合同
  logistics_contract: [
    {name: '物流合同1', status: '1'},
    {name: '物流合同1', status: '2'},
    {name: '物流合同1', status: '1'},
    {name: '物流合同1', status: '3'}
  ],
  // 参与角色
  role: [
    // {role_name: '司机1', status: '1'}
  ],
  // 融资计划
  financing_plan: {
    name: '融资计划', status: '1'
  },
  // 订单
  order: [
    {name: '电子订单1', status: '1'},
    {name: '电子订单2', status: '1'},
    {name: '电子订单3', status: '2'},
    {name: '电子订单4', status: '1'}
  ],
  // 定金
  deposite: [
    {name: '电子出货单1', status: '2'}
  ],
  // 出货单
  warehouse: [
    {name: '电子订单1', status: '1'},
    {name: '电子订单2', status: '3'},
    {name: '电子订单3', status: '2'},
    {name: '电子订单4', status: '1'}
  ],
  transport: [
    {name: '电子运单1', status: '3'},
    {name: '电子运单2', status: '3'},
    {name: '电子运单3', status: '3'},
    {name: '电子运单4', status: '3'}
  ],
  acceptence: [],
  settlement: [
    {value: 10000, status: '2'},
    {value: 20000, status: '1'},
    {value: 30000, status: '2'}
  ],
  invoice: [
    {value: 30000, status: '2'},
    {value: 30000, status: '1'}
  ],
  payment: [
    {value: 30000, status: '2'},
    {value: 50000, status: '1'}
  ],
  contract_settlement: {
    value: 100000,
    status: '2'
  }
}
module.exports =  [
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    },
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    },
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    },
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    },
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    },
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    },
    {
      id: (chain_id++).toString(),
      type: '1',
      // 销售合同
      sales_contract,
      payable_contract: [
        sales_contract, sales_contract, sales_contract, sales_contract
      ]
    }
  ]
