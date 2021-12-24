import MsgHeader from "./msgHeader";
import ContMess from "./contMess";
import "../components/GrowItem.css";
import "./conversationScreen.css";

function Messages() {
  return (
    <div className="all">
      <MsgHeader />
      <div className="messagesWrapper">
        <ContMess />
        <ContMess mine={true} />
        <ContMess />
        <ContMess mine={true} />
        <ContMess />
        <ContMess mine={true} />
        <ContMess />
        <ContMess mine={true} />
        <ContMess />
        <ContMess mine={true} />
        <ContMess />
        <ContMess mine={true} />
      </div>
      <div className="writeMessWrapper">
        <h3 className="senderButton grow">
        <i class="bi bi-file-earmark-arrow-up-fill"></i>
        </h3>
        <input type="text" className="writeMess" placeholder="ecrire votre message ici ..." />
        <h3 className="senderButton grow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
            />
          </svg>
        </h3>
      
      </div>
    </div>
  );
}
export default Messages;
