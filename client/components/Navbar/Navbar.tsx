import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-item">
          <img
            className="navbar-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/New_Steam_Logo_with_name.jpg"
          />
        </div>
        <FontAwesomeIcon
          className="navbar-item navbar-profile"
          icon={faUserCircle}
          size="2x"
          onMouseOver={(e) => {
            
          }}
        />
      </nav>
    </header>
  );
};
