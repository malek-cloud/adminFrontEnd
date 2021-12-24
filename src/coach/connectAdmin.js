import "./LogInStyle.css";
import "../components/GrowItem.scss";
import { useDispatch } from "react-redux";
const ConnectAdmin = () => {
  const dispatch = useDispatch();
  function enterAsCoach(){
    dispatch({type : 'coach'});
  }
  function enterAsSup(){
    dispatch({type : 'sup'});

  }
  function enterAsAdmin(){
    dispatch({type : 'admin'});
   
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
