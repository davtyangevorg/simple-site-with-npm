import { useClickButton } from "./hooks.js";
export var Button = function Button() {
  var _useClickButton = useClickButton(),
    count = _useClickButton.count,
    handleClick = _useClickButton.handleClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "You clicked $", count, " times!");
};