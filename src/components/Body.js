import Divider from "./divider";
import Profil from "../profileComponent/profil";
import Home from "./home";
import { useState } from "react";

function Body() {
  const [homee, setHome] = useState(true);
  const [profil, setProfil] = useState(false);
  function sethome(homee) {
    setProfil(false);
    setHome(true);
  }
  function setprofil(profil) {
    setHome(false);
    setProfil(true);
  }

  return (
    <div className="row">
      <Divider sethome={sethome} setprofil={setprofil} />
      {homee && !profil ? <Home /> : <Profil />}
    </div>
  );
}
export default Body;
