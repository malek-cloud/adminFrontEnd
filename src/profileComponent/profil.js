import Starter from "./Starter";
import Shift from "./Shift";
import FicheEmployer from "./FicheEmployer";
import Article from "../components/Article";

function Profil() {
  return (
    <div className="col-md-11 ">
      <div className="row me-4">
        <Starter />
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Shift />
        </div>
        <div className="col-sm-4">
          <Shift />
        </div>
        <div className="col-sm-4">
          <Shift />
        </div>
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
    </div>
  );
}
export default Profil;
