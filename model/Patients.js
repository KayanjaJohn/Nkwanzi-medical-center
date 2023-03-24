const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
	fName: {
		type: String,
		trim: true,
	},
	lName: {
		type: String,
		trim: true,
	},
	regDate: {
		type: Date,
		trim: true,
	},

	DOB: {
		type: Date,
		trim: true,
	},
	identity: {
		type: String,
		trim: true,
	},
	weight: {
		type: String,
		trim: true,
	},
	resName: {
		type: String,
		trim: true,
	},
	sex: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model("PatientRegister", patientSchema);
