import express from 'express'
import graphqlHTTP from 'express-graphql'

import schema from './schema'

const app = express()

app.use('/', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000, () => console.log('Now browse to localhost:3000/')) // eslint-disable-line

