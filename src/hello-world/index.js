import { GraphQLString } from 'graphql'

const helloWorld = {
  type: GraphQLString,
  args: {
    name: { type: GraphQLString }
  },
  resolve: (parentValue, args) => `hello world, ${args.name}`
}

export default helloWorld
