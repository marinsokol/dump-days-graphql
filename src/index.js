import express from 'express'
import graphqlHTTP from 'express-graphql'

import schema from './app/schema'
import config from './config'

const app = express()

app.use('/', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(config.PORT, () => console.log(`Now browse to localhost:${config.PORT}/`)) // eslint-disable-line

