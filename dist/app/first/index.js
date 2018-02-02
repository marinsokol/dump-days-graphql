'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var first = {
  type: _graphql.GraphQLString,
  args: {
    name: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(parentValue, args) {
    return _regenerator2.default.async(function resolve$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', 'first, ' + args.name);

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, null, undefined);
  }
};

exports.default = first;