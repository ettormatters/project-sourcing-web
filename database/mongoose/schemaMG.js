const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    id: String,
    partyHead: String,
    author: String,
    title: String,
    data: {
        category: String,
        oneLine: String,
        desc: String,
        hashTag: String,
        memberNumebr: Number
    },
    clap: Number,
    date: String
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;