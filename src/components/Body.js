import ChartOne from "./chartOne";
import ChartTwo from "./chartTwo";
import ClientCarousel from "./clientCarousel";
import Action from "./Action";
import PubArtHttp from "./PubArtHttp";
import Divider from "./divider";
import Intro from "../profileComponent/Intro";
import Shift from "../profileComponent/Shift";
import Article from "./Article";
import FicheEmployer from "../profileComponent/FicheEmployer";
function Body() {
  return (
    <div className="row">
      <Divider />
      {/*} <div className="col-md-11 ">
        <div className="row me-4">
          <Intro />
        </div>
        <div className="row">
          <div className="col-sm-4"> <Shift /> </div>
          <div className="col-sm-4"> <Shift /> </div>
          <div className="col-sm-4"> <Shift /> </div>
          
        </div>
        <div className="row me-1">
          <div className="col-md-8">
            <Article />
            <Article />
            <Article />
          </div>
          <div className="col-md-4 ">
            <FicheEmployer />
          </div>
        </div>
      </div>*/}

      <div className=" col  mb-2 me-4 ">
        <div className="mx-3">
          <div className="row ">
            <ChartOne />
            <ChartTwo />
            <ClientCarousel />
          </div>
          <div className="row ">
            <PubArtHttp />
            <Action />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
