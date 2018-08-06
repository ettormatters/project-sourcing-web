const { buildSchema } = require('graphql');

const schemaQL = buildSchema(`
    input PostInput {
        partyHead: String!
        author: String
        title: String!
        data: dataInput!
        clap: Int
    }

    input dataInput {
        category: String
        oneLine: String
        desc: String
        hashTag: String
        memberNumber: Int
    }

    input cateCheck {
        category: [String]
    }

    input Title {
        title: String!
    }

    type Data {
        category: String
        oneLine: String
        desc: String
        hashTag: String
        memberNumber: Int
    }

    type Post {
        id: ID!
        partyHead: String!
        author: String
        title: String!
        data: Data!
        clap: Int
        date: String
    }

    type Query {
        getInitialPosts: [Post]
        getUpdatePosts(cateCheck: cateCheck!): [Post]
        searchByHead(head: String!): [Post]
    }

    type Mutation {
        createPost(input: PostInput): Post
        updatePost(input: PostInput): Post
        updateClap(titleInput: Title): Post
    }
`)

module.exports = schemaQL;