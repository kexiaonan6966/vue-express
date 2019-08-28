
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        username: {type: String},
        
    })
   

module.exports = mongoose.model('Login', schema)