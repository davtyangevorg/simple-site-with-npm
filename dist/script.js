import App from "./react-components/app.js";
var button = document.getElementById("clickMe1");
var message = document.getElementById("message1");
button.addEventListener("click", function () {
  message.textContent = message.textContent ? "" : "You clicked the button!";
});
console.log("react", React);
var rootNode = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootNode);