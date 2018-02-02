'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _graphql = require('graphql');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pokemons = {
  type: new _graphql.GraphQLList(_models2.default),
  args: {
    type: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(parentValue, args) {
    var _ref, data;

    return _regenerator2.default.async(function resolve$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _regenerator2.default.awrap(_axios2.default.get('https://api.pokemontcg.io/v1/cards'));

          case 2:
            _ref = _context.sent;
            data = _ref.data;

            if (!args.type) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', data.cards.filter(function (card) {
              return card.types && card.types.findIndex(function (type) {
                return type.toLowerCase() === args.type.toLowerCase();
              }) !== -1;
            }));

          case 6:
            return _context.abrupt('return', data.cards);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, null, undefined);
  }
};

exports.default = Pokemons;