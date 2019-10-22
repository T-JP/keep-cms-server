import Koa = require('koa')
import db = require('../db')
import plugin = require('../plugin')
// import middleware = require('../middleware')
import route = require('../route')

const { logger, logerr } = require('../log')
const print = logger({ name: 'koa' })
const log = logerr(print)

const app = new Koa()
//访问数据库接口
app.context.db = db
app.keys = ['keep-cms']
//插件
app.use(plugin)
//自定义 中间件
// app.use(middleware)
//路由
app.use(route.routes())
app.use(route.allowedMethods())

app.on('error', (err: Error, ctx: Koa.Context) => {
  const { message, name, stack } = err
  const { ip, status, method, url } = ctx
  log({ message, name, stack, ip, status, method, url })
})
export = app
