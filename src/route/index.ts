import Router = require('@koa/router')
import Entity = require('../entity')
import CURD = require('../entity/curd')
import Feature = require('../feature')
const router = new Router({
  prefix: '/v1/api'
})
//增删改查
for (const table of Entity) {
  const { name, rule } = table
  const Name = name.replace(/^\S/, s => s.toUpperCase())
  for (const action of CURD) {
    router.post(`/${action.name}${Name}`, action(name, rule))
  }
}
//功能点
for (const func of Feature) {
  router.post(`/${func.name}`, func)
}
export = router
