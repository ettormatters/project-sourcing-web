const Post = require('../mongoose/schemaMG');

const root = {
  hello: () => {
    return 'Hello world!';
  },

  getPost: async ({id,title}) => {
    

    return await Post.find();
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
    newPost.date = new Date();

    newPost.save(function(err){
        if(err){
          console.error(err);
          return err;
        }
      });

    return newPost;
  },

  updatePost: ({id, input}) => {
    
    return true;
  },
};

module.exports = root;

