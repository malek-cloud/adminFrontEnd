import ChartOne from "./chartOne";
import ChartTwo from "./chartTwo";
import ClientCarousel from "./clientCarousel";
import Action from "./Action";
import PubArtHttp from "./PubArtHttp";
import Articles from "./Articles";

function Art (){
  return  <Articles/> ;
}

function Home() {
  return(
    
      <div className=" col  mb-2 me-2 ">
        <div className="mx-3">
          <div className="row ">
            <ChartOne />
            <ChartTwo />
            <ClientCarousel />
          </div>
          <div className="row ">
            
              <div className="col-md-9">
              <Art/>
              </div>
            <Action />
          </div>
        </div>
      </div>
    
  );
  
}
export default Home;
