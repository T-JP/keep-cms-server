import Koa = require('koa')

// const { logger, logerr } = require('../log')
// const print = logger('test', true, false)
// const log = logerr(print)

const test: Koa.Middleware = async (ctx, next) => {
  // print(ctx.cookies.get('KEEPID', { signed: true }))

  // const origin = ctx.header.origin
  // ctx.set('Access-Control-Allow-Origin', origin)
  // ctx.set('Access-Control-Allow-Credentials', 'true')
  // ctx.set('Access-Control-Allow-Headers', 'X-Requested-With')
  // ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')

  // print('%j', ctx.req.socket)
  // const message = '',
  //   name = '',
  //   stack = ''
  // const { ip, status, method, url } = ctx
  // print({ message, name, stack, ip, status, method, url })
  await next()
}
export = test
