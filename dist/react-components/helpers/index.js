"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserData = void 0;
var _userData = require("../consts/user-data.js");
var getUserData = exports.getUserData = function getUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(_userData.userData);
    }, 3000);
  });
};