import { Article } from "../../components/Article";
import { RegisterAside } from "../../components/Asides/RegisterAside";
import "../Home/home.css";

const Game = () => {
  return (
    <div className="home">
      <div className="articles">
        <Article />
      </div>
      <div className="asides">
        <RegisterAside />
      </div>
    </div>
  );
};

export default Game;
