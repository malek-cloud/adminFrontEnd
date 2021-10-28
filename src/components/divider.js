import "./GrowItem.scss";
import { Link } from "react-router-dom";
function divider() {
  return (
    <div className="d-flex flex-column col-1   align-items-center ">
      <div style={{ position: "fixed" , marginTop : "40px"}}>
        <Link to="/">
          <div className="message growIcon">
            <h2 className="mt-2 mb-4">
              <i className="bi bi-house-fill text-success"></i>
            </h2>
          </div>
        </Link>

        <Link to="/profil">
          <div className="message growIcon ">
            <h2>
              <i className="bi bi-person-fill text-success  "> </i>
            </h2>
          </div>
        </Link>

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
            <i className="bi bi-box-arrow-left text-success "></i>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default divider;
