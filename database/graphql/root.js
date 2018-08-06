const Post = require('../mongoose/schemaMG');

const root = {
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

  searchByHead: async ({head}) => {
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