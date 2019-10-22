import conf = require('../config')
import DB = require('./mongo')

const { logger, logerr } = require('../log')
const print = logger({ name: 'db' })
const log = logerr(print)

const mongo = new DB(conf.mongo, { useNewUrlParser: true, useUnifiedTopology: true })
mongo.connect().catch((err: Error) => {
  const { message, name, stack } = err
  const { host: ip, port: status, db } = conf.mongo
  const method = '端口:',
    url = `连接 ${db} 出错`
  log({ message, name, stack, ip, status, method, url })
})
export = mongo
