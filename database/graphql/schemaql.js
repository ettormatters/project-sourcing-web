const { buildSchema } = require('graphql');

const schemaQL = buildSchema(`
    input PostInput {
        partyHead: String!
        author: String
        title: String!
        data: inputData!
    }

    input inputData {
        category: String
        oneLine: String
        desc: String
        hashTag: String
        memberNumber: Int
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
        hello: String
        getPost(title: String): Post
    }

    type Mutation {
        createPost(input: PostInput): Post
        updatePost(id: ID!, input: PostInput): Post
    }
`)

module.exports = schemaQL;