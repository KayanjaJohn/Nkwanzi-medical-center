const express = require("express");
const router = express.Router();
const PatientRegister = require("../model/Patients");

//Patients registration
router.get("/patientsReg", (req, res) => {
	res.render("patientReg");
});

router.post("/patientsReg", async (req, res) => {
	try {
		const user = new PatientRegister(req.body);
		await user.save();
		res.redirect("/patientsReg");
	} catch (error) {
		console.error(error);
		res.status(500).send("Registration failed");
	}
});

// router.post("/patientsReg", async (req, res) => {
// 	try {
// 		const user = new PatientRegister(req.body);
// 		await PatientRegister.save(req.body, (error) => {
// 			if (error) {
// 				throw error;
// 			}
// 		});
// 	} catch (error) {
// 		res.status(404).send("Registration failed");
// 	}
// 	res.redirect("/patientsReg");
// });

//Stuff registration
// router.get("/staffReg", (req, res) => {
// 	res.render("staffReg");
// });

// router.post("/staffReg", async (req, res) => {
// 	try {
// 		const user = new Registration(req.body);
// 		await Registration.register(user, req.body.password, (error) => {
// 			if (error) {
// 				throw error;
// 			}
// 		});
// 	} catch (error) {
// 		res.status(404).send("Registration failed");
// 	}
// 	res.redirect("/staffReg");
// });

//Patients' list
router.get("/patientList", async (req, res) => {
	try {
		let sick = await Registration.find({ identity: "Patient" });
		res.render("patientsList", { patients: sick });
	} catch (error) {
		res.status(400), res.send("Unable to get patients");
	}
});

module.exports = router;
