const express = require("express");
const router = express.Router();
const treatmentReg = require("../model/Treatment");

//Treatment
router.get("/treatment", (req, res) => {
	res.render("treatment");
});

router.post("/treatment", async (req, res) => {
	try {
		const user = new treatmentReg(req.body);
		await user.save(req.body, (error) => {
			if (error) {
				throw error;
			}
		});
	} catch (error) {
		res.status(404).send("Registration failed");
	}
	res.redirect("/treatment");
});

module.exports = router;
