const Post = require('../mongoose/PostSchema');
const User = require('../mongoose/UserSchema');

const root = {
  signIn: ({input}) => {
    //email 탐지
      // (중첩) pw 탐지
  },

  nickOverlap: ({input}) => {
    let query = {
      "nickName": input.nickName
    }

    let result = User.findOne(query);

    return result
  },

  emailOverlap: ({input}) => {
    let query = {
      "email": input.email
    }

    let result = User.findOne(query);
    
    return result
  },

  createUser: ({input}) => {
    let newUser;
    newUser = new User();

    let id = require('crypto').randomBytes(10).toString('hex');
    newUser.id = id;
    newUser.nickName = input.nickName;
    newUser.email = input.email;
    newUser.pw = input.pw;
    newUser.age = input.age;
    newUser.date = new Date();

    newUser.save(function(err){
        if(err){
          console.error(err);
          return err;
        }
      });

    return newUser;
  },

  getInitialPosts: async () => {
    let recentAll = await Post.find().sort({date: -1});

    return recentAll;
  },

  getUpdatePosts: async ({cateCheck}) => {
    let arr = cateCheck.category;
    let query = {
      "data.category": {$in: arr }
    }

    let dataByList = await Post.find(query).sort({date: -1});

    return dataByList;
  },

  getByTitle: async ({titleInput}) => {
    let query = {
      "title": titleInput.title
    }

    let result = Post.findOne(query);
    return result;
  },

  getByHead: async ({head}) => {
    let query = {
      "partyHead" : head
    }

    let byHeadResult = await Post.find(query);

    return byHeadResult;
  },

  createPost: ({input}) => {
      let newPost;
      newPost = new Post();

      let id = require('crypto').randomBytes(10).toString('hex');
      newPost.id = id;
      newPost.partyHead = input.partyHead;

      if(input.author){
        newPost.author = input.author;
      }

      newPost.title = input.title;
      newPost.data.category = input.data.category;
      newPost.data.oneLine = input.data.oneLine;
      newPost.data.desc = input.data.desc;
      newPost.data.hashTag = input.data.hashTag;
      newPost.data.memberNumber = input.data.memberNumber;
      newPost.clap = input.clap;
      newPost.date = new Date();

      newPost.save(function(err){
          if(err){
            console.error(err);
            return err;
          }
        });

      return newPost;
  },

  updatePost: ({input}) => {
    
    return true;
  },

  updateClap: ({titleInput}) => {
    let query = {
      "title": titleInput.title
    }

    let clapResult;

    clapResult = Post.findOne(query, async (err,Picked)=>{
      Picked.clap = Picked.clap + 1;

      Picked.save(function(err){
        if(err){
          console.error(err);
          return err;
        }
      });
      return await Picked;
    });
    return clapResult;
  }
};

module.exports = root;

/*
if(Post.find({"title":`${input.title}`})){
  return null;
} else {}
*/