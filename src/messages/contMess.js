import "./conversationScreen.css";
import "./usersList.css";
import "./messages.css";
function ContMess(props) {
  if (props.mine) {
    return (
      <div className="mymessageWrapper">
        <div className="myMessage">
          automatically collapses at the lg (large) breakpoint.
        </div>
        <img className="connectedUsersImage" src="images/miki.png" alt="" />
      </div>
    );
  } else {
    return (
      <div className="messageWrapper">
        <img className="connectedUsersImage" src="images/profile.jpg " alt="" />
        <div className="friendMessage">
          the sub-components included in a responsive light-themed navbar that
          automatically collapses at the lg (large) breakpoint.
        </div>
      </div>
    );
  }
}
export default ContMess;
