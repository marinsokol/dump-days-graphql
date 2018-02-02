import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import helloWorld from './hello-world'
import pokemons from './pokemons'

const rootQuery =
  new GraphQLObjectType({
    name: 'rootQuery',
    fields: () => ({
      helloWorld,
      pokemons
    })
  })

export default new GraphQLSchema({
  query: rootQuery
})
