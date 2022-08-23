const Koa = require('koa')
const app = new Koa()
const path = require('path')

const koaBody = require('koa-body')
const parameter = require('koa-parameter')
const cors = require('@koa/cors')
const koaStatic = require('koa-static')

// 路由和工具函数
const Router = require('./router')
const { port, url } = require('./config.js')

// koa-body 配置对象
const uploadConfig = {
    // 支持文件上传
    multipart: true,
    formidable: {
        keepExtensions: true,
        // 限制文件上传大小为 100M
        maxFieldsSize: 100 * 1024 * 1024
    }
}

// 中间件
app.use(parameter(app))
app.use(cors())
app.use(koaBody(uploadConfig))
app.use(koaStatic(path.join(__dirname, 'public')))
app.use(koaStatic(path.join(__dirname, 'upload')))

//注册路由
app.use(Router.routes())
// 405 请求方式错误
app.use(Router.allowedMethods())

app.listen(port, () => {
    console.log(`Run In: ${url}`)
})
