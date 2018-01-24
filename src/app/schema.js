import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import helloWorld from './hello-world'

const rootQuery =
  new GraphQLObjectType({
    name: 'rootQuery',
    fields: () => ({
      helloWorld
    })
  })

export default new GraphQLSchema({
  query: rootQuery
})
