/**
 *  Mongodb数据库连接文件
 */

 const mongoose = require('mongoose')

 const { dbInfo } = require('../config')

 // 连接数据库
 mongoose.connect(dbInfo.connectStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })

 mongoose.connection.on('error', () => { console.log('数据库连接失败 Error!') })

 mongoose.connection.once('open', () => { console.log('数据库连接成功 Success~') })

 module.exports = mongoose
