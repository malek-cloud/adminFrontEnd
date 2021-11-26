import { useRef, useContext } from "react";
import "./LogInStyle.css";
import  AuthContext  from '../context/authContext';

const LogIn =  () => {
  const emailRef = useRef();
  const passwdRef = useRef();
  const auth = useContext(AuthContext);
  const authSubmitHandler = async event => {
    event.preventDefault();
    const logInData = {
      email: emailRef.current.value,
      password: passwdRef.current.value,
    };
    console.log(logInData.email +" "+ logInData.password );
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}employee/login`,
          {
            method : 'POST',
            body : JSON.stringify(logInData),
            headers : {
              'Content-Type': 'application/json'
            }
          }
        );
                                     
        const data = await responseData.json();
        console.log(data);
        console.log(responseData.status);
        auth.token = data.token ;
        
        


        auth.login(data.Employee, data.token);
        auth.EmployeeId = data.Employee  ;
        console.log(auth.EmployeeId + " : DONNE LKOL ");
        console.log(auth.EmployeeId.nom + " : el nom bark ");
      } catch (err) {
            console.log("mamchetech el check mta el login" + err);
      }
    
  };


  return (
    <div>
      <header>
        <table className="nav">
          <tr>
            <th>
              {" "}
              <img alt="" className="logo" src="images/oyemkemlavert.png" />
            </th>
            <th className="accueil">Accueil</th>
          </tr>
        </table>
      </header>

      <section className="main">
        <p className="sign">Se Connecter</p>

        <table>
          <tr>
            <th>
              <img alt="" className="image" src="images/oyemvertblanc.jpg" />
            </th>
            <th>
              <form className="form1" />
              <input
                className="email "
                name="email"
                type="email"
                align="center"
                placeholder="Email"
                ref={emailRef}
              />

              <div>
                <input
                  className="pass"
                  type="password"
                  align="center"
                  placeholder="Mot De Passe"
                  ref={passwdRef}
                />
              </div>
              <a href="/"   className="submit" onClick={authSubmitHandler} align="center">
                Se Connecter
              </a>
              <br />
              <br />

              <div>
                <p className="forgot " align="center ">
                  <a alt="" href="Reset password ">
                    Mot De Passe Oublié?
                  </a>
                </p>
              </div>
            </th>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default LogIn ;
