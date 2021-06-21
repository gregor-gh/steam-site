import "./home.css";
import { News } from "../../components/News";
import { TopGames } from "../../components/TopGames";

export const Home = () => {
  return (
    <div className="home">
      <div className="articles">
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
      <div className="asides">
        <TopGames />
      </div>
    </div>
  );
};
