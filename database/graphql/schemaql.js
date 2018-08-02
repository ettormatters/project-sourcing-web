const { buildSchema } = require('graphql');

const schemaql = buildSchema(`
    type Query {
        hello: String
    }
`)

module.exports = schemaql;