const { Router } = require('express');
const express = require('express');
const router = Router();
const {renderIndex,renderAbout} = require('../controllers/index.controller');

router.get('/',renderIndex);
router.get('/about',renderAbout);
/* 
router.get ('/', (req,res) =>{
    res.render('index');
})

router.get ('/about', (req,res) =>{
    res.render('about');
}) */

module.exports=router;