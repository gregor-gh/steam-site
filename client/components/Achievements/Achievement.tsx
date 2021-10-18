import "./Achievement.css";
import ACHIEVEMENT_LOCKED from "../../public/achievement-locked.bmp";

export const Achievement = () => {
  return (
    <div className="achievement">
      <img
        className="achievement-image"
        src={ACHIEVEMENT_LOCKED}
        alt="Achievement locked image"
      />
      <div>
        <h4>Title</h4>
        <p>Description</p>
        <p>unlock %</p>
      </div>
    </div>
  );
};
