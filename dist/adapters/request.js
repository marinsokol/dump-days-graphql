'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var get = function _callee(params) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _axios2.default)({
              url: _config2.default.API_URL,
              method: 'get',
              params: params
            }));

          case 3:
            res = _context.sent;
            return _context.abrupt('return', res.data);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, null, undefined, [[0, 7]]);
  };

  var post = function _callee2(data) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _axios2.default)({
              url: _config2.default.API_URL,
              method: 'post',
              data: data
            }));

          case 3:
            res = _context2.sent;
            return _context2.abrupt('return', res.data);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0;

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, null, undefined, [[0, 7]]);
  };

  return {
    get: get,
    post: post
  };
};