import Koa = require('koa')
import util = require('../../util')
const { isEmpty } = util
const Login: Koa.Middleware = async ctx => {
  const {
    db,
    request: {
      body: { account, password }
    }
  } = ctx
  let status = 200,
    msg = '登陆成功',
    data
  if (account && password) {
    const user = await db.query('user', { account, password })
    if (isEmpty(user)) {
      status = 400
      msg = '帐号,密码错误!'
    } else {
      const { account, password, ...other } = user[0] as User
      data = other
      ctx.cookies.set('KEEPID', other._id, {
        maxAge: 1000 * 60 * 30
      })
    }
  } else {
    status = 400
    msg = '请填写帐号,密码!'
  }
  ctx.body = { status, msg, data }
}
export = Login
