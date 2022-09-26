const path = require('path')
const Koa = require('koa')
const app = new Koa()

const koaBody = require('koa-body')
const cors = require('@koa/cors')
const koaStatic = require('koa-static')
const koaMount = require('koa-mount')
const parameter = require('koa-parameter')

const Router = require('./router')
const { port, url } = require('./config.js')

const uploadConfig = {
    // 支持文件上传
    multipart: true,
    formidable: {
        keepExtensions: true,
        maxFieldsSize: 100 * 1024 * 1024
    }
}

// 中间件
app.use(cors())
app.use(parameter(app))
app.use(koaBody(uploadConfig))
app.use(koaMount('/static', koaStatic(path.join(__dirname, 'public'))))
app.use(koaMount('/upload', koaStatic(path.join(__dirname, 'upload'))))

// 注册路由
app.use(Router.routes())
// 405 请求方式错误
app.use(Router.allowedMethods())

app.listen(port, () => {
    console.log(`Run In: ${url}`)
})
