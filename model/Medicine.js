const mongoose = require('mongoose');
const medicineSchema = new mongoose.Schema({

    drugName:{
        type: String,
        trim: true
    },
    registrationDate:{
        type: Date,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },

    weight:{
        type: String,
        trim: true
    },
    manufactureDate:{
        type: Date,
        trim: true
    },
    expiryDate:{
        type: Date,
        trim: true
    },
    cost:{
        type: String,
        trim: true
    },
    sickness:{
        type: String,
        trim: true
    }

});


module.exports = mongoose.model('medicineReg', medicineSchema);