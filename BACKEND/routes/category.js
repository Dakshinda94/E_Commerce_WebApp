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
    cate.save((error, category) => {
        if(error) return res.status(400).json({error});
        if(category){
            return res.status(201).json({ category});
        }
    });
});

module.exports = router;