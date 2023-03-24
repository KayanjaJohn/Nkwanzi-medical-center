//DEPENDENCIES
const express = require("express");
const path = require("path");
const passport = require("passport");
const config = require("./config/db");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


// Environment variables
dotenv.config();



// defining expressSession
const expressSession = require("express-session")({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
});

// Importing model
const Registration = require("./model/Staff");


// Importing Routes
const registerRoute = require("./routes/registerRoute");
const treatmentRoute = require("./routes/treatmentRoute");
const checkpoints = require("./routes/checkpoints");
const medicineReg = require("./routes/medicineReg");
const staffRoute = require("./routes/staffRegister");

//INSTANTIATION
const app = express();

// Setting up db connections
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once("open", function () {
	console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
	console.error(err);
});

//CONFIGURATIONS
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//MIDDLEWARE

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(expressSession);

// Passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

// Using routes
app.use("/", registerRoute);
app.use("/", treatmentRoute);
app.use("/", checkpoints);
app.use("/", medicineReg);
app.use("/", staffRoute);

//ROUTES

app.get("*", (req, res) => {
	res.send("Not Found!, page not found");
});

let PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));