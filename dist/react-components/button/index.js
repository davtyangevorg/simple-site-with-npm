"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _hooks = require("./hooks.js");
var Button = exports.Button = function Button() {
  var _useClickButton = (0, _hooks.useClickButton)(),
    count = _useClickButton.count,
    handleClick = _useClickButton.handleClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "You clicked $", count, " times!");
};