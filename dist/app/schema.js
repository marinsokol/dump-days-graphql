'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _helloWorld = require('./hello-world');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootQuery = new _graphql.GraphQLObjectType({
  name: 'rootQuery',
  fields: function fields() {
    return {
      helloWorld: _helloWorld2.default
    };
  }
});

exports.default = new _graphql.GraphQLSchema({
  query: rootQuery
});