import "../styles/Logon.css";
import axios from "axios";

const Logon = () => {
  return (
    <div>
      <form className="logon-form">
        <div className="logon-fields">
          Test
          <button
            onClick={async (e) => {
              e.preventDefault();

              console.log(
                await axios.get("api/test").catch((e) => console.log(e))
              );

              fetch("api/test")
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((e) => console.log(e));
            }}
          >
            test
          </button>
        </div>
      </form>
    </div>
  );
};

export default Logon;
