import "./Achievement.css";
import ACHIEVEMENT_LOCKED from "../../public/achievement-locked.bmp";

export const Achievement = ({
  name,
  description,
  globalUnlock,
  unlocktime,
}: {
  name: string;
  description: string;
  globalUnlock: number;
  unlocktime: Date;
}) => {
  return (
    <div className="achievement">
      <img
        className="achievement-image"
        src={ACHIEVEMENT_LOCKED}
        alt="Achievement locked image"
      />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{Math.round(globalUnlock)}%</p>
      </div>
    </div>
  );
};
