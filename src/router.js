const Router = require('@koa/router')
const response = require('./utils/response')

// 实例化路由对象，并设置路由前缀
const router = new Router({ prefix: '/api' })

router.get('/test', (ctx, next) => {
  ctx.body = response(0, '请求成功', 'Hello World')
})

module.exports = router
