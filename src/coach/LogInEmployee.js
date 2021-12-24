import AuthContext from "../context/authContext";
import { useRef, useState, useContext } from "react";
import "./LogInStyle.css";
import LoadingSpinner from "./LoadingSpinner";
const LogIn = () => {
  const emailRef = useRef();
  const passwdRef = useRef();
  const auth = useContext(AuthContext);
  const [loader, setLoader] = useState(false);

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    const logInData = {
      email: emailRef.current.value,
      password: passwdRef.current.value,
    };

    try {
      setLoader(true);
      const responseData = await fetch(
        process.env.REACT_APP_BACKEND_URL + "employee/login",
        {
          method: "POST",
          body: JSON.stringify(logInData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await responseData.json();
      if(responseData.status == 200){
        console.log("het el loader " + loader);
      auth.token = data.token;
      auth.login(data.Employee, data.token);
      auth.EmployeeId = data.Employee;
      setLoader(false);
      console.log(data);
      }
    } catch (err) {
      console.log("mamchetech el check mta el login" + err);
    }
  };

  return (
    <div>
      {loader && <LoadingSpinner asOverlay />}
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

              <a
                href="/"
                className="submit"
                onClick={authSubmitHandler}
                align="center"
              >
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

export default LogIn;
