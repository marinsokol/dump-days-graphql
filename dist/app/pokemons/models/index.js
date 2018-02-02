'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var Attack = new _graphql.GraphQLObjectType({
  name: 'Attack',
  fields: function fields() {
    return {
      cost: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      name: { type: _graphql.GraphQLString },
      text: { type: _graphql.GraphQLString },
      damage: { type: _graphql.GraphQLString },
      convertedEnergyCost: { type: _graphql.GraphQLInt }
    };
  }
});

var BaseObject = new _graphql.GraphQLObjectType({
  name: 'BaseObject',
  fields: function fields() {
    return {
      type: { type: _graphql.GraphQLString },
      value: { type: _graphql.GraphQLString }
    };
  }
});

var Pokemon = new _graphql.GraphQLObjectType({
  name: 'Pokemon',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      name: { type: _graphql.GraphQLString },
      nationalPokedexNumber: { type: _graphql.GraphQLInt },
      hp: { type: _graphql.GraphQLString },
      imageUrl: { type: _graphql.GraphQLString },
      imageUrlHiRes: { type: _graphql.GraphQLString },
      types: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      number: { type: _graphql.GraphQLString },
      subtype: { type: _graphql.GraphQLString },
      supertype: { type: _graphql.GraphQLString },
      attacks: { type: new _graphql.GraphQLList(Attack) },
      text: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      weaknesses: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      resistances: { type: new _graphql.GraphQLList(BaseObject) },
      retreatCost: { type: new _graphql.GraphQLList(BaseObject) },
      artist: { type: _graphql.GraphQLString },
      set: { type: _graphql.GraphQLString },
      setCode: { type: _graphql.GraphQLString },
      rarity: { type: _graphql.GraphQLString }
    };
  }
});

exports.default = Pokemon;