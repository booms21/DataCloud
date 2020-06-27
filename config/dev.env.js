'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ihoguApi: '"/ihoguApi/"',
  v2exApi: '"/v2exApi/"'
});
