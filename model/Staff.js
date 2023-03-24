const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const staffSchema = new mongoose.Schema({
  fName: {
    type: String,
    trim: true
  },
  lName: {
    type: String,
    trim: true
  },
  userId: {
    type: String,
    trim: true
  },
  DOB: {
    type: String,
    trim: true
  },
  regDate: {
    type: String,
    trim: true
  },
  nin: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  nationality: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    trim: true
  },
  resName: {
    type: String,
    trim: true
  },
  contact: {
    type: String,
    trim: true
  },
  sex: {
    type: String,
    trim: true
  }
});

staffSchema.plugin(passportLocalMongoose, {
  usernameField: 'userId'
});

module.exports = mongoose.model('StaffRegistration', staffSchema);
