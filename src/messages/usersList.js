import "./conversationScreen.css";
import "./usersList.css";
import { useState, useEffect } from "react";
import Content from "./content";
function UsersList() {
  const [clients, setClients] = useState(true);
  const [coachs, setCoachs] = useState(false);
  const [sup, setSup] = useState(false);
  function ChooseClient() {
      setClients(true);
      setCoachs(false);
      setSup(false);
      console.log(clients);
  }
  function ChooseCoach() {
    setClients(false);
    setCoachs(true);
    setSup(false);
    console.log(coachs);
  }
  function ChooseSup() {
      setClients(false);
      setCoachs(false);
      setSup(true);
      console.log("el sup is " + sup);
  }

  return (
    <div className="usersListWrapper">
     
      <div className="usersType">
        <div>
          <div className= { (clients & !coachs & !sup)? "clicked" : "type"} onClick={ChooseClient}>Clients</div>
        </div>
        <div className={ (!clients & coachs & !sup)? "clicked" : "type"}  onClick={ChooseCoach} >Coachs</div>
        <div className={ (!clients & !coachs & sup)? "clicked" : "type"}  onClick={ChooseSup}>Superviseurs</div>
      </div>

      <div className="scrollConnect">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}
export default UsersList;
