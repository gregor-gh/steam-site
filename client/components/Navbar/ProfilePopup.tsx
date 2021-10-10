import { Link } from "react-router-dom";
import { Button } from "../Button";
import useStore from "../useStore";
import "./Navbar.css";

export const ProfilePopup: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { visible: boolean }
> = ({ visible }) => {
  const { isLoggedIn } = useStore((state) => state);

  function logOut() {
    fetch("/api/auth/log-out").then(() => window.location.reload());
  }

  return visible ? (
    <div className="profile-popup">
      {isLoggedIn ? (
        <Button onClick={logOut}>Sign out of Steam-Site</Button>
      ) : (
        <>
          <a href="/api/auth">
            <Button>Sign into Steam-Site</Button>
          </a>
          <Link to="/register">
            <Button buttonType="secondary">Register with Steam-Site</Button>
          </Link>
        </>
      )}
    </div>
  ) : null;
};
