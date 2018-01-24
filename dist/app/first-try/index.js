'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var firstTry = {
  type: _graphql.GraphQLString,
  args: {
    try: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(parentValue, args) {
    return 'try, ' + args.try;
  }
};

exports.default = firstTry;