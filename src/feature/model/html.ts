import Koa = require('koa')
const GenerateHtml: Koa.Middleware = async ctx => {
  ctx.body = 'generateHtml'
}
export = GenerateHtml
