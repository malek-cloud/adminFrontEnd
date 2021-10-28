
import Divider from "./divider";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Profil from "../profileComponent/profil";
import Home from "./home";

function Body() {
  return (
    <Router>
      <Switch>
        <div className="row">
          <Divider  />
          <Route path="/" exact component={Home} />
          <Route path="/profil" exact component={Profil} />
          

          
        </div>
      </Switch>
    </Router>
  );
}
export default Body;
