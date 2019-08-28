
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        name: {type: String},
        avatar: {type: String},
        title: {type: String},
        categories: [{type: mongoose.SchemaTypes.ObjectId, ref: "Category"}],
        //评分
        scores: {
        	difficult: {type: Number},
        	skill: {type: Number},
    	    attack: {type: Number},
    	    survive: {type: Number},
        },
        //技能
        skills: [{
        	icon: {type: String},
    	    name: {type: String},
    	    description: {type: String},
    	    tips: {type: String}
        }],
        //出装
        items1: [{type: mongoose.SchemaTypes.ObjectId, ref: "Item"}],
        items2: [{type: mongoose.SchemaTypes.ObjectId, ref: "Item"}],

        //使用技巧
        usageTips: {type: String},
        //对抗技巧
        battelTips: {type: String},
        //团战思路
        teamTips: {type: String},
        partners: [{
              hero: {type: mongoose.SchemaTypes.ObjectId, ref: "Hero"},
              description: {type: String}
          }],

    })
   

module.exports = mongoose.model('Hero', schema)