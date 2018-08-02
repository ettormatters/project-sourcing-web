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
        memberNumber: Number
    },
    clap: Number,
    date: Date
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;