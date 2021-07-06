import React from "react";
import "./button.css";

export const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { type?: ButtonType }
> = ({ type, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={
        type === "secondary"
          ? "button button-secondary"
          : "button button-primary"
      }
    >
      {children}
    </div>
  );
};
