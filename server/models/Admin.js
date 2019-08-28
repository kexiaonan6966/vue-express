
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        username: {type: String},
        password: {type: String, 
        	select: false,//默认要查找的信息不显示
        	
        	set (value) {
        		//set接收到的值是用户填的信息
        		return require('bcrypt').hashSync(value, 10)
        	} 
        },

    })
   

module.exports = mongoose.model('Admin', schema)