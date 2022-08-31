"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = function reducer(state, action) {
  // sidebar functionality
  if (action.type === 'CLOSE_SIDEBAR') {
    return _objectSpread({}, state, {
      showAside1: false
    });
  }

  if (action.type === 'OPEN_SIDEBAR') {
    return _objectSpread({}, state, {
      showAside1: true
    });
  } // navbar functionality


  if (action.type === 'OPEN_NAVBAR') {
    return _objectSpread({}, state, {
      openCloseNav1: true
    });
  }

  if (action.type === 'CLOSE_NAVBAR') {
    return _objectSpread({}, state, {
      openCloseNav1: false
    });
  }

  throw new Error('The functionality is invalid');
};

exports.reducer = reducer;