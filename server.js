const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schemaql = require('./database/graphql/schemaql');
const root = require('./database/graphql/root')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  const serverQL = express();

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  serverQL.use('/graphql', graphqlHTTP({
    schema: schemaql,
    rootValue: root,
    graphiql: true,
  }));

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

  serverQL.listen(4000, (err) => {
    if(err) throw err
    console.log('> Running a GraphQL API server at localhost:4000/graphql');
  });
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})