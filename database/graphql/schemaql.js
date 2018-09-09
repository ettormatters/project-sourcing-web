var { buildSchema } = require('graphql');

const schemaQL = buildSchema(`
    input SignInInput {
        email: String!
        pw: String!
    }

    input Nick {
        nickName: String!
    }

    input Email {
        email: String!
    }

    input SignUpInput {
        nickName: String!
        email: String!
        pw: String!
        age: Int!
    }

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

    type User {
        id: String!
        nickName: String!
        email: String!
        pw: String!
        age: Int!
        info: Info
    }

    type Info {
        intro: String
        hashTag: [String]
        location: String
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

    type Data {
        category: String
        oneLine: String
        desc: String
        hashTag: String
        memberNumber: Int
    }

    type Query {
        signIn(input: SignInInput): User
        nickOverlap(input: Nick): User
        emailOverlap(input: Email): User
        getInitialPosts: [Post]
        getUpdatePosts(cateCheck: cateCheck!): [Post]
        getByTitle(titleInput: Title): Post
        getByHead(head: String!): [Post]
    }

    type Mutation {
        createUser(input: SignUpInput): User
        createPost(input: PostInput): Post
        updatePost(input: PostInput): Post
        updateClap(titleInput: Title): Post
    }
`)

module.exports = schemaQL;