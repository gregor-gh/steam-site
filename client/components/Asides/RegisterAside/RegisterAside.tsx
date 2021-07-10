import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { Aside } from "../Aside";

export const RegisterAside = () => {
  return (
    <Aside heading="Register!">
      <>
        <p>
          Register or sign in to get a personalised news feed and achievement
          tracking.
        </p>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </>
    </Aside>
  );
};
