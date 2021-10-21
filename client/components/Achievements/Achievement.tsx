import "./Achievement.css";
import ACHIEVEMENT_LOCKED from "../../public/achievement-locked.bmp";
import ACHIEVEMENT_UNLOCKED from "../../public/achievement-unlocked.bmp";

export const Achievement = ({
  name,
  description,
  globalUnlock,
  unlocktime,
}: {
  name: string;
  description: string;
  globalUnlock: number;
  unlocktime: string;
}) => {
  return (
    <div className="achievement">
      {unlocktime ? (
        <img
          className="achievement-image"
          src={ACHIEVEMENT_UNLOCKED}
          alt="Achievement unlocked image"
        />
      ) : (
        <img
          className="achievement-image"
          src={ACHIEVEMENT_LOCKED}
          alt="Achievement locked image"
        />
      )}
      <div>
        <h4 className="achievement-name">{name}</h4>
        <p className="achievement-description">{description}</p>
        <p className="achievement-description">
          Global unlock:{" "}
          {Math.round((globalUnlock + Number.EPSILON) * 100) / 100}%
        </p>
        {unlocktime && (
          <p className="achievement-description">
            You unlocked on {new Date(unlocktime).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};
