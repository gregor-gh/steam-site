import React from "react";
import "./Aside.css"

export const Aside = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactElement;
}) => {
  return (
    <>
      <h3 className="aside-heading">{heading}</h3>
      <div className="aside-body">{children}</div>
    </>
  );
};
