import Koa = require('koa')
const { check, checkQuery, uuid, isEmpty, date } = require('../util')
const Create = (table: string, rules: TableRule): Koa.Middleware => {
  return async (ctx: Koa.Context): Promise<void> => {
    const {
      db,
      request: { body }
    } = ctx
    const { error, result, onlys } = check(body, rules)
    let msg, status
    error && (msg = error.join('\n '))
    if (isEmpty(error)) {
      let isOnly = true
      if (onlys) {
        for (const key of onlys) {
          const query: ObjectAny = {}
          query[key] = result[key]
          const data = await db.queryOne(table, query)
          if (!isEmpty(data)) {
            error.push(`${key}重复`)
            isOnly && (isOnly = false)
          }
        }
      }
      if (isOnly) {
        result._id = uuid()
        result.created_at = date().time
        const {
          result: { n: count }
        } = await db.insert(table, result)
        if (count) {
          status = 200
          msg = `${count}条数据,新增成功!`
        } else {
          status = 400
          msg = `新增失败!`
        }
      } else {
        status = 400
        msg = error.join('\n ')
      }
    } else {
      status = 400
      msg = error.join('\n ')
    }
    ctx.body = { status, msg }
  }
}
const Update = (table: string): Koa.Middleware => {
  return async (ctx: Koa.Context): Promise<void> => {
    const {
      db,
      request: {
        body: { _id, ...data }
      }
    } = ctx

    let status = 400,
      msg = '更新失败！'

    if (_id) {
      data.modified_at = date().time
      const {
        result: { n: count }
      } = await db.update(table, { _id }, data)
      if (count) {
        status = 200
        msg = `${count}条数据，更新成功！`
      }
    } else {
      msg = 'ID 必填'
    }
    ctx.body = { status, msg }
  }
}
const Query = (table: string, rules: TableRule): Koa.Middleware => {
  return async (ctx: Koa.Context): Promise<void> => {
    const {
      db,
      request: { body }
    } = ctx
    const { error, result } = checkQuery(body, rules)
    let status, msg, data
    if (isEmpty(error)) {
      data = await db.query(table, result)
      status = 200
      msg = '查询成功！'
    } else {
      status = 400
      msg = error.join('\n ')
    }

    ctx.body = { status, msg, data }
  }
}
const Remove = (table: string): Koa.Middleware => {
  return async (ctx: Koa.Context): Promise<void> => {
    const {
      db,
      request: {
        body: { _id }
      }
    } = ctx

    let status = 400,
      msg = '删除失败！'

    if (_id) {
      const {
        result: { n: count }
      } = await db.delete(table, { _id })
      if (count) {
        status = 200
        msg = `${count}条数据，删除成功！`
      }
    } else {
      msg = 'ID 必填'
    }
    ctx.body = { status, msg }
  }
}
export = [Create, Update, Query, Remove]
