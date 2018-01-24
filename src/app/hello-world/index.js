import { GraphQLString, GraphQLObjectType } from 'graphql'

const helloWorld = {
  type: new GraphQLObjectType({
    name: 'helloWorld',
    fields: () => ({
      args: { type: GraphQLString },
      message: { type: GraphQLString }
    })
  }),
  args: {
    name: { type: GraphQLString }
  },
  resolve: async (parentValue, args) => ({
    message: `hello world, ${args.name}`,
    args: args.name
  })
}

export default helloWorld
