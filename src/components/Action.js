import "./GrowItem.scss";
import {useContext } from "react";
import ModelInput from "../coach/ModalInput";
import ArtModalInput from "./ArtModalInput";
import { AuthContext } from "../context/authContext";
import {useSelector} from 'react-redux' ;
function Action() {
  const enterAs = useSelector(state => state.enterAs)
  const auth = useContext(AuthContext);
  const storedData = JSON.parse(localStorage.getItem('usageType'));
       
  const h = enterAs==="coach" ? "260px" :  "310px" ;
  const mtop = enterAs ==="coach"?"20px" : "0px"; 
  return (
    <div
      className="col-md-3 bg-body mt-4   bg-body"
      style={{
        height : h,
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
        right: "25px",
        position: "fixed",
        width: "43vh",
        overflow: "hidden",
        paddingLeft : "30px"
      
        
      }}>
        
         <div style ={{ marginTop : "20px"}}> <div className="row text-success growCard" style={{height:"30px"}}>
         <h6 style={{fontSize:"15px", textAlign:"start" }} ><ArtModalInput /></h6>
         </div>
         <h5 style={{marginLeft : "30px"}}> - - - - - - -</h5></div>

         {
          enterAs ==="coach" ? <div></div> : <div ><div className="row text-success growCard" style={{height:"30px" ,}}>
          <h6 style={{fontSize:"15px", textAlign:"start"}} >  <ModelInput /></h6>
          </div>
        <h5 style={{marginLeft : "30px"}}> - - - - - - -</h5></div>

        }
        
        
        <div className="row text-success growCard" style={{height:"30px"}}>
        <h6 style={{fontSize:"15px", textAlign:"start"}} >Qui est Connecté</h6>
        </div>
        <h5 style={{marginLeft : "30px"}}> - - - - - - -</h5>
        <div className="row text-success growCard" style={{height:"30px"}}>
        <h6 style={{fontSize:"15px", textAlign:"start"}} >Personnes Inscrites</h6>
        </div>
        <h5 style={{marginLeft : "30px"}}> - - - - - - -</h5>
        <div className="row text-success growCard" style={{height:"30px"}}>
        <h6 style={{fontSize:"15px", textAlign:"start"}} >FeedBacks</h6>
        </div>
      
    </div>
  );
}
export default Action;
