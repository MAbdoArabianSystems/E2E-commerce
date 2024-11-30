import StyledComponent from "@/patterns/HOC/StyledComponent";
import React from "react";
import { useSelector } from "react-redux";

const button = ({ style, onclick, children }) => {
  const loadCartAdded = useSelector((state) => state?.Carts?.loading);
  console.log(loadCartAdded)
  return (
    <button onClick={onclick} className={`${style}`} disabled={loadCartAdded}>
      {children}
      {loadCartAdded ? `...` : ""}
    </button>
  );
};
const Button = StyledComponent(button);
export default Button;
