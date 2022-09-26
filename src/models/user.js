const mongoose = require('./db')

// 用户模型定义
const UserSchema = mongoose.Schema({
    username: { type: String },
    password: { type: String }
})

module.exports = mongoose.model('User', UserSchema)
