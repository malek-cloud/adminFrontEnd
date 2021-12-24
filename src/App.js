import React, { useContext } from "react";
import useAuth from "./hooks/auth-hook";
import { AuthContext } from "./context/authContext";
import ConnectAdmin from "./coach/connectAdmin";
import ConnectSup from "./coach/connectSup";
import LogIn from "./coach/LogInEmployee";
import All from "./components/all";
import {useSelector, useDispatch} from "react-redux";
function App() {
  const dispatch = useDispatch();

  const enterAs = useSelector(state => state.enterAs)

  const { token, login, logout, EmployeeId } = useAuth();
  let routes;

  if (token) {

    if (enterAs !== "") {
      routes = <All />;
    } else {
      if (EmployeeId.typeEmployee === "administrateur") {       
        routes = <ConnectAdmin />;
      } else if (EmployeeId.typeEmployee === "Superviseur") {
        routes = <ConnectSup />;
      } else if (EmployeeId.typeEmployee === "Coach") {
        dispatch({type : 'coach'});
        routes = <All />;
      }
    }
  } else routes = <LogIn />;

  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          EmployeeId: EmployeeId,
          login: login,
          logout: logout,
        }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
