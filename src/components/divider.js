import "./GrowItem.scss";
import { useContext } from "react";
import AuthContext from "../context/authContext";
function Divider(props) {
  const auth = useContext(AuthContext);
  const logOut = () => {
    auth.token = null;
    auth.login(null, null);
  };

  return (
    <div className="d-flex flex-column col-1 mt-2  align-items-center ">
      <div style={{ position: "fixed" }}>
        <div className="message growIcon">
          <h2 className=" ">
            <i className="bi bi-house-fill text-success" onClick={props.sethome}></i>
          </h2>
        </div>

        <div className="message growIcon ">
          <h2>
            <i className="bi bi-person-fill text-success "  onClick={props.setprofil}> </i>
          </h2>
        </div>

        <div className="message growIcon">
          <h2>
            <i className="bi bi-chat-text-fill text-success "> </i>
          </h2>
        </div>
        <div className="message growIcon">
          <h2>
            <i className=" bi bi-bar-chart-line-fill text-success "></i>
          </h2>
        </div>
        <div className="message growIcon">
          <h2>
            <i className="bi bi-gear-fill text-success "></i>
          </h2>
        </div>

        <div className="message growIcon">
          <h2 className="mt-4 ">
            <a href="/" style={{}} alt="" onClick={logOut}>
              <i className="bi bi-box-arrow-left text-success "></i>
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Divider;
