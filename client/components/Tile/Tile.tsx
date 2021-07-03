import "./tile.css";

export const Tile = ({ item }: { item: React.ReactElement }) => {
  return <div className="tile">{item}</div>;
};
