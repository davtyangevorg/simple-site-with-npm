import App from "./react-components/app.js";
const button = document.getElementById("clickMe1");
const message = document.getElementById("message1");
button.addEventListener("click", () => {
  message.textContent = message.textContent ? "" : "You clicked the button!";
});
console.log("react", React);
const rootNode = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootNode);