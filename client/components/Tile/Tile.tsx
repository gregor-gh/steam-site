import React from "react";
import "./tile.css";

export const Tile = ({ children }: { children: JSX.Element }) => {
  return <div className="tile">{children}</div>;
};
