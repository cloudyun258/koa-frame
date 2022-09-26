const Router = require('@koa/router')
const sendResponse = require('./utils/sendResponse')

const router = new Router()


router.get('/test', ctx => {
    ctx.body = sendResponse(0, '请求成功', 'HelloWorld')
})

module.exports = router
