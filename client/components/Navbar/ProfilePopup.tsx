import { Button } from "../Button";
import "./navbar.css";

export const ProfilePopup: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { visible: boolean }> = ({ visible }) => {
    return visible ?
      <div className="profile-popup">
        <Button>Sign into Steam-Site</Button>
        <Button>Register with Steam-Site</Button>
      </div> : null;
};
