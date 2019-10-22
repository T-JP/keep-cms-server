process.env.NODE_ENV = 'production'
import http = require('http')
import app = require('./koa')
import conf = require('./config')

const { logger, logerr } = require('./log')
const print = logger({ name: 'main', print: true, output: false })
const log = logerr(print)

const server = http.createServer(app.callback())
server.setTimeout(60000)
server.headersTimeout = 30000
server.keepAliveTimeout = 6000

server.on('error', (err: Error) => {
  const { message, name, stack } = err
  const { host: ip, port: status } = conf.http
  const method = '端口:',
    url = '启动WEB服务出错'
  log({ message, name, stack, ip, status, method, url })
})

server.listen(conf.http)
// print('%j', server)
print('http://localhost:8888', 'http://192.168.91.107:8888')
