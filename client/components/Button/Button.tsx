import React from "react";
import "./button.css";

export const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { text?: string }
> = ({ text, children, ...rest }) => {
  return <div {...rest} className="button">{text}</div>;
};
