const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

    //id: String
    //nickName
    //email
    //pw
    //age
    //date

    //profile image
    //소개글
    //능력치 []
    //지역 , 

    id: String,
    nickName: String,
    email: String,
    pw: String,
    data: {
        image: Buffer,
        intro: String,
        hashTag: String,
        location: String
    },
    date: Date
})

const User = mongoose.model('User', userSchema);

module.exports = User;