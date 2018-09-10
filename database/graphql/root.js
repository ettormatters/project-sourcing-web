const Post = require('../mongoose/PostSchema');
const User = require('../mongoose/UserSchema');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config.js');

const root = {
  signIn: async ({input}) => {
    
    let query = {
      "email": input.email
    }

    let status;
    let res;

    await User.findOne(query, async (err,user) => {
      if(user == null) {
        console.log("email not found")
        status =  404
      } else {
        if(user.pw != input.pw){
          console.log("user" + user.pw)
          console.log(input.pw)
          console.log("pw not matched")
          status =  405
        } else {
          await jwt.sign(
            {
                id: user.id,
                nickName: user.nickName
            }, 
            secret, 
            {
              expiresIn: '7d',
              issuer: 'PARTYPPLEcomp',
              subject: 'userAuth'
            }, (err, token) => {
              if (err) {
                console.log(err);
                status = 406
              }
              status = 202
              res = token;
            })
        }
      }
    })

    return { 
      status: status,
      token: res 
    }
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