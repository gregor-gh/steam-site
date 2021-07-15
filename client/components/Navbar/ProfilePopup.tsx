import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Navbar.css";

export const ProfilePopup: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { visible: boolean }
> = ({ visible }) => {
  return visible ? (
    <div className="profile-popup">
      <Button>Sign into Steam-Site</Button>
      <Link to="/register">
        <Button type="secondary">Register with Steam-Site</Button>
      </Link>
    </div>
  ) : null;
};
