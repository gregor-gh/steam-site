import "./home.css";
import { News } from "../../components/News";
import { TopGames } from "../../components/TopGames";
import { Tile } from "../../components/Tile";

export const Home = () => {
  return (
    <div className="home">
      <div className="articles">
        <Tile>
          <News />
        </Tile>
        <Tile>
          <News />
        </Tile>
        <Tile>
          <News />
        </Tile>
        <Tile>
          <News />
        </Tile>
        <Tile>
          <News />
        </Tile>
      </div>
      <div className="asides">
        <Tile>
          <TopGames />
        </Tile>
      </div>
    </div>
  );
};
