import "./messages.css";
import "../components/GrowItem.css";
import "./usersList.css";

function MsgHeader() {
  return (
    <div>
      <div className="wrapAll">
        <div className="Wrapper ">
          <div className="chatOnlineImageContainer">
          <img
            className="connectedUserImageHeader"
            src="images/profile.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
          </div>
          <div className="Wrap">
            <div className="connectedNameHeader">Demi Lovato</div>
            <div className="stateHeader">Actuellement en ligne</div>
          </div>
        </div>
        <div className="orth">
          <div className="emptySpace"></div>
          <div className="Wrapper">
            <h3 className="growIcon">
              <i className="bi bi-telephone callIcon "></i>
            </h3>
            <h3 className="growIcon ">
              <i class="bi bi-camera-video callIcon"></i>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MsgHeader;
