import React, { useContext } from "react";
import useAuth from "./hooks/auth-hook";
import { AuthContext } from "./context/authContext";
import ConnectAdmin from "./coach/connectAdmin";
import ConnectSup from "./coach/connectSup";
import LogIn from "./coach/LogInEmployee";
import All from "./components/all";
function App() {
  const auth = useContext(AuthContext);

  const { token,enterAs, login, logout,enterType, EmployeeId } = useAuth();
  let routes;

  if (token) {
    
    if (enterAs !== "") {
     
      routes = <All />;
      console.log(enterAs);
      auth.enterAs = enterAs ;
      console.log(auth.enterAs);
    } else {
      if (EmployeeId.typeEmployee === "administrateur") {
        
        routes = <ConnectAdmin />;
        console.log(enterAs.length);
      } else if (EmployeeId.typeEmployee === "Superviseur") {
        routes = <ConnectSup />;
      } else if (EmployeeId.typeEmployee === "Coach") {
        auth.enterType("coach") ;
        console.log(token);
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
          enterAs : enterAs,
          login: login,
          enterType : enterType,
          logout: logout,
        }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
