import PublierArticle from "./PublierArticle";
import {useState} from "react";

function ArtModalInput() {
      const [modalShow, setModalShow] = useState(false);
    
      return (
        <>
          <div variant="primary" onClick={() => {
            setModalShow(true);
            
          }}>
            Publier un article
          </div>
    
          <PublierArticle
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      );
    }
export default ArtModalInput ; 