import React from "react";
import "./button.css";

export const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { buttonType?: ButtonType }
> = ({ buttonType, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        buttonType === "secondary"
          ? "button button-secondary"
          : "button button-primary"
      }
    >
      {children}
    </button>
  );
};
