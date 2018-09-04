const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    id: String,
    nickName: String,
    email: String,
    pw: String,
    info: {
        //image: Buffer,
        intro: String,
        hashTag: [String],
        location: String
    },
    date: Date
})

const User = mongoose.model('User', userSchema);

module.exports = User;