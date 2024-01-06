import { useClickButton } from "./hooks.js";
export const Button = () => {
  const {
    count,
    handleClick
  } = useClickButton();
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "You clicked $", count, " times!");
};