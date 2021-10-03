import { Article } from "../../components/Article";
import { RegisterAside } from "../../components/Asides/RegisterAside";
import { Tile } from "../../components/Tile";
import "../Home/Home.css";

const Game = () => {
  return (
    <div className="home">
      <div className="articles">
        <Article />
      </div>
      <div className="asides">
        <Tile >
          <RegisterAside/>
        </Tile>
      </div>
    </div>
  );
};

export default Game;
