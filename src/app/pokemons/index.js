import { GraphQLList, GraphQLString } from 'graphql'
import axios from 'axios'

import Pokemon from './models'

const Pokemons = {
  type: new GraphQLList(Pokemon),
  args: {
    type: { type: GraphQLString }
  },
  resolve: async (parentValue, args) => {
    const { data } = await axios.get('https://api.pokemontcg.io/v1/cards')

    if (args.type) {
      return data.cards.filter(card => card.types && card.types.findIndex(type => type.toLowerCase() === args.type.toLowerCase()) !== -1)
    }

    return data.cards
  }
}

export default Pokemons
