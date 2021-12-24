import Divider from "./divider";
import Profil from "../profileComponent/profil";
import Home from "./home";
import { useState } from "react";
import ConversationScreen from "../messages/conversationScreen";

function Body() {
  const [homee, setHome] = useState(true);
  const [profil, setProfil] = useState(false);
  const [message, setMessage] = useState(false);
  function sethome() {
    setProfil(false);
    setHome(true);
    setMessage(false);
  }
  function setprofil() {
    setHome(false);
    setProfil(true);
    setMessage(false);
  }
  function setmessage() {
    setHome(false);
    setProfil(false);
    setMessage(true);
  }

  if (homee && !profil && !message) {
    return (
      <div className="row">
        <Divider
          sethome={sethome}
          setprofil={setprofil}
          setmessage={setmessage}
        />
        <Home />
      </div>
    );
  } else if (!homee && profil && !message) {
    return (
      <div className="row">
        <Divider
          sethome={sethome}
          setprofil={setprofil}
          setmessage={setmessage}
        />
        <Profil />
      </div>
    );
  } else {
    return (
      <div className="row">
        <Divider
          sethome={sethome}
          setprofil={setprofil}
          setmessage={setmessage}
        />
        <ConversationScreen />
      </div>
    );
  }
}
export default Body;
