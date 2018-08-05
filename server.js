const express = require('express');
const next = require('next');
const mongoose =require('mongoose');
const graphqlHTTP = require('express-graphql');
const schemaQL = require('./database/graphql/schemaQL');
const root = require('./database/graphql/root');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  const serverQL = express();

  const db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function(){
      console.log("> Connected to mongod server");
  });
  mongoose.connect('mongodb://localhost:27017');

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  serverQL.use('/graphql', cors(), graphqlHTTP({
    schema: schemaQL,
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