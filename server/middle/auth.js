module.exports = options => {
	const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const Admin = require('../models/Admin')
	return async(req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请提供token')
        const { id } = jwt.verify(token, req.app.get('secret') )
        assert(id, 401, 'token无效')
        req.user = await Admin.findById(id)
        assert(req.user, 401, '请先登录')
        await next()
    }
}