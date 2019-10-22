import Koa = require('koa')

const { logger, logerr } = require('../log')
const print = logger({ name: 'cross', type: '-http', print: false })
const log = logerr(print)

const cross: Koa.Middleware = async (ctx, next) => {
  const { ip, status, method, url, header } = ctx
  const { origin } = header
  if (origin) {
    ctx.set('Access-Control-Allow-Origin', origin)
    ctx.set('Access-Control-Allow-Credentials', 'true')
    ctx.set('Access-Control-Allow-Headers', 'X-Requested-With')
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  }

  log({
    stack: JSON.stringify(header),
    ip,
    status,
    method,
    url
  })
  await next()
}
export = cross
