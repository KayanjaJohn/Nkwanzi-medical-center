const mongoose = require('mongoose');
const passportlocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    fName:{
        type: String,
        trim: true
    },

    lName:{
        type: String,
        trim: true
    },
    date:{
        type: String,
        trim: true
    },

    resName:{
        type: String,
        trim: true
    },

    weight:{
        type: String,
        trim: true
    },
    role:{
        type: String,
        trim: true
    },
    sex:{
        type: String,
        trim: true
    }

});

userSchema.plugin(passportlocalMongoose, {
    usernameField: 'fName'
});

module.exports = mongoose.model('Registration', userSchema);