'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./app/schema');

var _schema2 = _interopRequireDefault(_schema);

var _request = require('./adapters/request');

var _request2 = _interopRequireDefault(_request);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  context: {
    request: (0, _request2.default)()
  },
  graphiql: true
}));

app.listen(_config2.default.PORT, function () {
  return console.log('Now browse to localhost:' + _config2.default.PORT + '/');
}); // eslint-disable-line