/**
 *  配置文件
 */

 module.exports = {
	// token密钥
	tokenSecret: 'koa-frame-202219990917',
	// 数据库信息
	dbInfo: {
		name: 'koa-frame',
		username: 'koa-frame',
		passwrod: '123456',
		get connectStr() {
            return `mongodb://localhost:27017/${this.name}`
        }
	},
	domain: 'localhost',
	port: 3009,
	get url() {
        return `http://${this.domain}:${this.port}`
    },
	get urls() {
        return `https://${this.domain}:${this.port}`
    }
}
