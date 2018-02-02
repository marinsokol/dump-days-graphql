import { GraphQLString, GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql'

const Attack = new GraphQLObjectType({
  name: 'Attack',
  fields: () => ({
    cost: { type: new GraphQLList(GraphQLString) },
    name: { type: GraphQLString },
    text: { type: GraphQLString },
    damage: { type: GraphQLString },
    convertedEnergyCost: { type: GraphQLInt }
  })
})

const BaseObject = new GraphQLObjectType({
  name: 'BaseObject',
  fields: () => ({
    type: { type: GraphQLString },
    value: { type: GraphQLString }
  })
})

const Pokemon = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    nationalPokedexNumber: { type: GraphQLInt },
    hp: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    imageUrlHiRes: { type: GraphQLString },
    types: { type: new GraphQLList(GraphQLString) },
    number: { type: GraphQLString },
    subtype: { type: GraphQLString },
    supertype: { type: GraphQLString },
    attacks: { type: new GraphQLList(Attack) },
    text: { type: new GraphQLList(GraphQLString) },
    weaknesses: { type: new GraphQLList(GraphQLString) },
    resistances: { type: new GraphQLList(BaseObject) },
    retreatCost: { type: new GraphQLList(BaseObject) },
    artist: { type: GraphQLString },
    set: { type: GraphQLString },
    setCode: { type: GraphQLString },
    rarity: { type: GraphQLString }
  })
})

export default Pokemon
