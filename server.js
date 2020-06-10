const Serverless = require('serverless-http');
const Koa = require('koa');

const app = new Koa()

module.exports.handler = Serverless(app)