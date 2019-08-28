module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const mongoose = require('mongoose')

   const Category = mongoose.model('Category')
   const Article = mongoose.model('Article')


   //导入新闻数据



   app.use('/web/api', router)
}