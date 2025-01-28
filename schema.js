const mongoose = require('mongoose');
const { Schema } = mongoose;

// Profile Schema for user information
const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
}, { _id: false }); 

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ['user'], 
  },
  profile: {
    type: profileSchema,
    required: true, 
  },
  lastLogin: {
    type: Date,
    default: null, 
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;