module.exports = options => {
	return async(req, res, next) => {
    	//inflection转化类名的（小写复数转到大写单数）
    	const modelName = require('inflection').classify(req.params.resource)
    	//表示要给请求对象上上挂载一个Model
    	req.Model = require(`../models/${modelName}`)
    	next()
    }
}