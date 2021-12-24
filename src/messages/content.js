import "./usersList.css";
function Content() {
  return (
      <div className="connectedPersonWrapper">
        <div className="chatOnlineImageContainer">
        <img className="connectedUsersImage" src="images/elon.jpg" alt="" />
        <div className="chatOnlineBadge"></div>
        </div>
        <div className="connectedName">Elon Musk</div>
      </div>
  );
}
export default Content;
