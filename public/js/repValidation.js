const validate0 = () => {
	let val = 0;

	var fName = document.register.fName;
	var lName = document.register.lName;
	var regDate = document.register.regDate;
	var DOB = document.register.DOB;
	var resName = document.register.resName;
	var weight = document.register.weight;
	var identity = document.register.identity;

	// Error

	var fNameError = document.getElementById("fNameerr");
	var lNameError = document.getElementById("lNameerr");
	var regDateError = document.getElementById("regDateerr");
	var DOBError = document.getElementById("DOBerr");
	var resNameError = document.getElementById("resNameerr");
	var weightError = document.getElementById("weighterr");
	var identityError = document.getElementById("identityerr");

	////////////////////////////////////////////////////////////////////////////////////
	const alphabet = /^([A-Za-z]{2,25})$/;
	if (fName.value == "") {
		fName.style.border = "1px solid red";
		fNameError.textContent = "This field is required.";
		fNameError.style = "color: red; , font-size:10;";
		val++;
	} else if (!fName.value.match(alphabet)) {
		fName.style.border = "1px solid red";
		fNameError.textContent = "This field is alphabetic.";
		fNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		fName.style.border = "1px solid green";
		fNameError.textContent = "";
	}

	/////////////////////////////////////////////////////////////////////////////////////
	if (lName.value == "") {
		lName.style.border = "1px solid red";
		lNameError.textContent = "This field is required.";
		lNameError.style = "color: red; , font-size:10;";
		val++;
	} else if (!lName.value.match(alphabet)) {
		lName.style.border = "1px solid red";
		lNameError.textContent = "This field is alphabetic.";
		lNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		lName.style.border = "1px solid green";
		lNameError.textContent = "";
	}

	///////////////////////////////////////////////////////////////////////////////
	if (regDate.value == "") {
		regDate.style.border = "1px solid red";
		regDateError.textContent = "This field is required.";
		regDateError.style = "color: red; , font-size:10;";
		val++;
	} else {
		regDate.style.border = "1px solid green";
		regDateError.textContent = "";
	}

	///////////////////////////////////////////////////////////////////////////////
	if (DOB.value == "") {
		DOB.style.border = "1px solid red";
		DOBError.textContent = "This field is required.";
		DOBError.style = "color: red; , font-size:10;";
		val++;
	} else {
		DOB.style.border = "1px solid green";
		DOBError.textContent = "";
	}

	////////////////////////////////////////////////////////////////////////////////
	if (identity.value == "") {
		identity.style.border = "1px solid red";
		identityError.textContent = "This field is required.";
		identityError.style = "color: red; , font-size:10;";
		val++;
	} else {
		identity.style.border = "1px solid green";
		identityError.textContent = "";
	}

	////////////////////////////////////////////////////////////////////////////////
	if (weight.value == "") {
		weight.style.border = "1px solid red";
		weightError.textContent = "This field is required.";
		weightError.style = "color: red; , font-size:10;";
		val++;
	} else {
		weight.style.border = "1px solid green";
		weightError.textContent = "";
	}

	////////////////////////////////////////////////////////////////////////////////
	if (resName.value == "") {
		resName.style.border = "1px solid red";
		resNameError.textContent = "This field is required.";
		resNameError.style = "color: red; , font-size:10;";
		val++;
	} else if (!resName.value.match(alphabet)) {
		resName.style.border = "1px solid red";
		resNameError.textContent = "This field is alphabetic.";
		resNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		resName.style.border = "1px solid green";
		resNameError.textContent = "";
	}
};
