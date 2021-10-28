import "./GrowItem.scss";
import ModelInput from "../coach/ModalInput";
import ArtModalInput from "./ArtModalInput";

function Action() {
  return (
    <div
      className="col-md-3 bg-body mt-4   bg-body"
      style={{
        height: "31vh",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
        right: "25px",
        position: "fixed",
        width: "43vh",
        overflow: "hidden",
        pointer : "cursor"
        
      }}
    >
      <div>
        <table className="table table-hover">
          <tbody>
            
            <tr>
              <td className="text-success growCard " >
                
                  <h6 ><ArtModalInput /></h6>
                
              </td>
            </tr>
            <tr>
              <td className="text-success growCard">
                <h6 >
                  <ModelInput />
                </h6>
              </td>
            </tr>

            <tr>
              <td className="text-success growCard">
                <h6 >Qui est Connecté</h6>
              </td>
            </tr>
            <tr>
              <td className="text-success growCard">
                <h6 >Personnes Inscrites</h6>
              </td>
            </tr>
            <tr>
              <td className="text-success growCard">
                <h6 >Feedbacks</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Action;
