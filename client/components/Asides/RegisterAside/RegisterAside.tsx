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
        <Button>Register</Button>
      </>
    </Aside>
  );
};
