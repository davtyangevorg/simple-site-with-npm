"use strict";

var _app = _interopRequireDefault(require("./react-components/app.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var button = document.getElementById("clickMe1");
var message = document.getElementById("message1");
button.addEventListener("click", function () {
  message.textContent = message.textContent ? "" : "You clicked the button!";
});
console.log("react", React);
var rootNode = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(_app["default"], null), rootNode);