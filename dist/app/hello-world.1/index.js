'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var helloWorld = {
  type: _graphql.GraphQLString,
  args: {
    name: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(parentValue, args) {
    return 'hello world, ' + args.name;
  }
};

exports.default = helloWorld;