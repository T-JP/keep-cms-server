import staticServe = require('koa-static')
import conf = require('../config')
export = staticServe(conf.serve.root, conf.serve.opts)
