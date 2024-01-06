import { userData } from "../consts/user-data.js";
export var getUserData = function getUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(userData);
    }, 3000);
  });
};