const express = require('express');
const router = express.Router();
const Registration = require('../model/User');

router.get('/register', (req, res) =>{
    res.render('patientReg');
});

router.post('/register', async (req, res) =>{
    try {
        const user = new Registration(req.body)
        await Registration.register(user, req.body.fName, (error) =>{
            if (error ) {
                throw error;
            }
        })
        
    } catch (error) {
        res.status(404).send('Registration failed')
    }
    res.redirect('/register')
})


router.get('/land', (req, res) =>{
    res.render('landing-page');
});




module.exports = router;