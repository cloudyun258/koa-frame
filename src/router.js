const Router = require('@koa/router')
const UserModel = require('./models/user')
const response = require('./utils/response')

// 实例化路由对象，并设置路由前缀
const router = new Router({ prefix: '/api' })

router.get('/user', async (ctx, next) => {
    await UserModel.create({
        username: 'Koa-Frame',
        password: '123456'
    })
    const userData = await UserModel.find()
    ctx.body = response(0, '请求成功', userData)
})

module.exports = router
