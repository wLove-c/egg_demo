'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539272009393_1806';

  // add your config here
  // config/config.default.js
// add middleware robot
  config.middleware = [
    'robot'
  ];
  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ]
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },

  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://www.baidu.com',
  };


  return config;

};

