module.exports = app => {
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost:27017/test-ez', {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true
    })
    require('require-all')(__dirname + '/../models')
}
