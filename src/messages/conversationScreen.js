import Messages from "./messages";
import FriendInformation from "./friendInformation";
import UsersList from "./usersList";
import "./conversationScreen.css";
function ConversationScreen(){
      return <div className="allWrapper">
            <UsersList  />
            <Messages />
            <FriendInformation  />
      </div>
} 
export default ConversationScreen ;