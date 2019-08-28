module.exports = app => {
    const express = require('express')
    const Admin = require('../../models/Admin')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    

    //通用的接口就不能够直接调用具体的模型
    const router = express.Router({
    	mergeParams: true
    	//合并URL
    })


//新建分类
    router.post('/', async(req, res) => {

        const model = await req.Model.create(req.body)
        res.send(model)
    })

    router.get('/', async(req, res) => {
    	const queryOptions = {}
    	if (req.Model.modelName === 'Category') {
    		queryOptions.populate = 'parent'
    	}
    	//不是所有的都需要关联到上级分类，所以需要加上一个判断
        const model = await req.Model.find().setOptions(queryOptions)
        res.send(model)
    })
//删除分类
    router.delete('/:id', async(req, res) => {
    	const model = await req.Model.findByIdAndDelete(req.params.id)
    	res.send({
    		status: true
    	})
    })
//资源详情
    router.get('/:id', async(req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
//修改
    router.put('/:id', async(req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    //中间件
   // const authMiddleware = require('../../middle/auth')
   const resourMiddleware = require('../../middle/resource')

//修改成通用的CRUD接口-------------  :resource(动态的资源)--所以需要一URL为依据
    app.use('/admin/api/rest/:resource',resourMiddleware(), router)

    //以下是上传图片

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload', upload.single('file'), async(req, res) => {
    	const file = req.file
    	file.url = `http://localhost:3000/uploads/${file.filename}` 
    	res.send(file)
    })

                     //一下是用户的登录验证
    // app.post('/admin/api/login', async(req, res) => {
    //     const {username, password} = req.body
    //     const user = await Admin.findOne({
    //         username: username
    //     }).select('+password')

    //     //1.判断用户名是否存在
    //     assert(user, 422, '用户不存在')
    //     // if (!user) {
    //     //     res.status(422).send({
    //     //         message: '用户名不存在'
    //     //     })
    //     // }
    //     //2.校验密码是否存在
    //     const valid = require('bcrypt').compareSync(password, user.password)
    //     assert(valid, 422, '密码错误')

    //     // if (!valid) {
    //     //     res.status(422).send({
    //     //         message: '密码错误'
    //     //     })
    //     // }        
    //     //3.验证token

    //     const token = jwt.sign({id: user._id}, app.get('secret'))
    //     res.send({token})
    // })

    //错误处理
    app.use(async(err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
        
}

