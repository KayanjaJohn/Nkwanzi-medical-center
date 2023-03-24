const express = require('express');
const router = express.Router();

// Landing page
router.get('/land', (req, res) =>{
    res.render('landing-page');
});

// homepage
router.get('/home', (req, res) =>{
    res.render('homepage');
});


module.exports = router