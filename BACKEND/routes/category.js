const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify');
const category = require('../models/category');
const router = express.Router();

router.post('/category/create', (req, res) =>{
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cate = new Category(categoryObj);
    cate.save().then(() => {
        res.json("Category Added")
        }).catch((err)=>{
            console.log(err);
        })
})

module.exports = router;