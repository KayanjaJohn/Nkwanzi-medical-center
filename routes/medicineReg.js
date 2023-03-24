const express = require('express');
const router= express.Router();
const multer = require('multer');

const Registration = require('../model/Staff');
const medicineReg = require('../model/Medicine')

router.get('/medicine', (req, res) =>{
    res.render('medicine')
});

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/medicine", async  (req, res) => {
	let drugTech = await Registration.find({role: 'Drug Officer'})
	res.render("medicine", {drugTechnicians:drugTech});
});


router.post("/medicine",  upload.single("image"), async (req, res) => {
	console.log(req.body);
	try {
		const drug = new medicineReg(req.body);
		drug.image = req.file.path;
		console.log("This is my produce", drug);
		await drug.save();
		res.redirect("/drugList");
	} catch (error) {
		res.status(400).redirect("/noImage");
		console.log(error);
	}
});

//Drug list 
router.get("/drugList", async (req, res) => {
	req.session.user = req.user
	try {
		const drugsOrder = {_id:1}
		let druglist = await medicineReg.find({ role: "Drug-technician" }).sort(drugsOrder);
		res.render("drugList", { drugs: druglist, currentUser:req.session.user });
	} catch (error) {
	res.status(400), res.send('Unable to get product');	
	}
});



module.exports = router;