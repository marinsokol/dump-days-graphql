import { GraphQLString, GraphQLObjectType } from 'graphql'

import firstTry from '../first-try'

const helloWorld = {
  type: new GraphQLObjectType({
    name: 'dimesions',
    fields: () => ({
      first: firstTry,
      message: { type: GraphQLString }
    })
  }),
  args: {
    name: { type: GraphQLString }
  },
  resolve: (parentValue, args) => ({
    message: `hello world, ${args.name}`
  })
}

export default helloWorld
