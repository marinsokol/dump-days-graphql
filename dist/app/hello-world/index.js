'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _firstTry = require('../first-try');

var _firstTry2 = _interopRequireDefault(_firstTry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helloWorld = {
  type: new _graphql.GraphQLObjectType({
    name: 'dimesions',
    fields: function fields() {
      return {
        first: _firstTry2.default,
        message: { type: _graphql.GraphQLString }
      };
    }
  }),
  args: {
    name: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(parentValue, args) {
    return {
      message: 'hello world, ' + args.name
    };
  }
};

exports.default = helloWorld;