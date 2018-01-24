import { GraphQLString } from 'graphql'

const firstTry = {
  type: GraphQLString,
  args: {
    try: { type: GraphQLString }
  },
  resolve: (parentValue, args) => `try, ${args.try}`
}

export default firstTry
