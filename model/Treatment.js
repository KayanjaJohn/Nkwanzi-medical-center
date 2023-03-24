const mongoose = require('mongoose');
const treatmentSchema = new mongoose.Schema({
    fName:{
        type: String,
        trim: true
    },

    lName:{
        type: String,
        trim: true
    },
    date:{
        type: Date,
        trim: true
    },

    weight:{
        type: String,
        trim: true
    },
    sex:{
        type: String,
        trim: true
    },
    resName:{
        type: String,
        trim: true
    },
    age:{
        type: String,
        trim: true
    },
    fee:{
        type: String,
        trim: true
    },
    medicine:{
        type: String,
        trim: true
    },
    sickness:{
        type: String,
        trim: true
    },
    nutrition:{
        type: String,
        trim: true
    }

});

module.exports = mongoose.model('treatmentReg', treatmentSchema);