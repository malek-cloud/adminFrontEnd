import ChartOne from "./chartOne";
import ChartTwo from "./chartTwo";
import ClientCarousel from "./clientCarousel";
import Action from "./Action";
import PubArtHttp from "./PubArtHttp";
import Article from "./Article";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


function Art(){
  return <div className="col-sm-9">
    <Article/>
  </div>
}

function Home() {
  return(
    <Router>
      <div className=" col  mb-2 me-2 ">
        <div className="mx-3">
          <div className="row ">
            <ChartOne />
            <ChartTwo />
            <ClientCarousel />
          </div>
          <div className="row ">
            <Switch>
              <Route path="/" exact component={Art} />
            </Switch>
            <PubArtHttp />

            <Action />
          </div>
        </div>
      </div>
    </Router>
  );
  
}
export default Home;
