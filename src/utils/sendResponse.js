/**
 *  请求成功响应的统一数据格式
 */

const sendResponse = (code, msg, data = {}) => {
	return {
		code,
		msg,
		data
	}
}

module.exports = sendResponse
