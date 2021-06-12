import "../styles/Logon.css";
import axios from "axios";

const Logon = () => {
  const test = async () => {
    window.location.href = "/api/auth";
  };

  return (
    <div>
      <form className="logon-form">
        <div className="logon-fields">
          Test
          <button
            onClick={test}
          >
            test
          </button>
        </div>
      </form>
    </div>
  );
};

export default Logon;
