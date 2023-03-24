const express = require("express");
const router = express.Router();
const Registration = require("../model/Staff");

router.get("/staffReg", (req, res) => {
	res.render("staffReg");
});

router.post('/staffReg', async (req, res) => {
	try {
	  const userData = req.body;
	  const user = new Registration(userData);
	  await Registration.register(user, userData.password);
	  res.redirect('/staffReg');
	} catch (error) {
	  console.error(error);
	  res.status(500).send('Registration failed');
	}
  });
  
//Staff list
router.get("/staffList", async (req, res) => {
	req.session.user = req.user;
	try {
		let team = await Registration.find("role");
		res.render("staffList", {
			teamMembers: team,
			currentUser: req.session.user,
		});
	} catch (error) {
		res.status(400), res.send("Unable to get member");
	}
});

module.exports = router;
