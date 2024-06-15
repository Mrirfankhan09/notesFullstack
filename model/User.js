// const { string } = require('i/lib/util');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true } ,
    // token : String
});

const User = mongoose.model('User', userSchema);
module.exports = User;