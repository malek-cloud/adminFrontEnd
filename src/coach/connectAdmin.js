import "./LogInStyle.css";
import "../components/GrowItem.scss";
import {useContext } from "react";
import  AuthContext  from '../context/authContext';
const ConnectAdmin = () => {
  const auth = useContext(AuthContext);
  function enterAsCoach(){
    auth.enterType("coach");
    console.log(auth.enterAs);


  }
  function enterAsSup(){
    auth.enterType("sup");
    console.log(auth.enterAs);

  }
  function enterAsAdmin(){
   
    auth.enterType("admin");
    console.log(auth.enterAs);

  }
  return (
  
      <div>
      <header>
        <table className="nav">
          <tr>
            <th>
              {" "}
              <img alt="" className="logo" src="images/oyemkemlavert.png" />
            </th>
          </tr>
        </table>
      </header>

      <section className="main">
        <p className="sign">Se Connecter En Tant Que :</p>

        <table>
          <tr>
            <th>
              <img alt="" className="image" src="images/oyemvertblanc.jpg" />
            </th>
            <th>
              <form className="form1" />
              
                <div class="screen">
                <div  class="mainn growCard" onClick={enterAsAdmin}>
                    <p class="typeUser">Administrateur</p>
                  </div>
                  <div   class="mainn growCard" onClick={enterAsSup}>
                    <p class="typeUser">Superviseur</p>
                  </div>
                  <div   class="mainn growCard" onClick={enterAsCoach}>
                    <p class="typeUser">Coach</p>
                  </div>
                </div>
              
              <br />
              <div></div>
            </th>
          </tr>
        </table>
      </section></div>
    
  );
};
export default ConnectAdmin;
