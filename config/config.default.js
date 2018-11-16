'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540187352989_6964';
  // 对外开发端口信息
  config.cluster = {
    listen: {
      path: '',
      port: 80,
      hostname: '0.0.0.0',
    }
  },
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    }
  }
  config.mysql = {
    // database configuration
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'mock_data_nsmain',
    },
    app: true,
    agent: false,
  }
  // add your config here
  config.middleware = [];
  config.cluster = {
    listen: {
      path: '',
      port: 80,
      hostname: '0.0.0.0',
    }
  }

  return config;
};
