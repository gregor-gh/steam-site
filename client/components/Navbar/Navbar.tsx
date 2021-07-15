import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { ProfilePopup } from "./ProfilePopup";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../useStore";

export const Navbar = () => {
  const { steamProfile } = useStore((state) => state);
  const [profileVisible, setProfileVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  function showProfile() {
    if (profileVisible) {
      hideProfile();
    } else {
      setProfileVisible(true);
      document.addEventListener("click", hideProfileListener);
    }
  }

  function hideProfile() {
    setProfileVisible(false);
    document.removeEventListener("click", hideProfileListener);
  }

  function hideProfileListener(e: any) {
    if (!profileRef.current?.contains(e.target)) {
      hideProfile();
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-item">
          <Link to="/">
            <img
              className="navbar-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/New_Steam_Logo_with_name.jpg"
              alt="Steam Logo"
            />
          </Link>
        </div>
        <div className="navbar-profile" ref={profileRef}>
          {steamProfile?.photoUrl ? (
            <img
              className="navbar-item navbar-profile-icon"
              src={steamProfile.photoUrl}
              alt="User's profile picture."
              onClick={showProfile}
            />
          ) : (
            <FontAwesomeIcon
              className="navbar-item navbar-profile-icon"
              icon={faUserCircle}
              size="2x"
              onClick={showProfile}
            />
          )}

          <ProfilePopup visible={profileVisible} />
        </div>
      </nav>
    </header>
  );
};
