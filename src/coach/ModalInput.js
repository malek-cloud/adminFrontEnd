import Input from "../coach/Input";
import {useState} from "react";

function ModalInput() {
      const [modalShow, setModalShow] = useState(false);
    
      return (
        <>
          <div variant="primary" onClick={() => {
            setModalShow(true);
            
          }}>
            Créer un compte pour employer
          </div>
    
          <Input
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      );
    }
export default ModalInput ; 