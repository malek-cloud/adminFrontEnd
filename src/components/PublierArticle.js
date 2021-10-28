import { useRef, useState } from "react";
import "./GrowItem.scss" ;
import { Modal } from "react-bootstrap";
import FileUpload from "../elements/FileUpload" ;
function PublierArticle(props) {
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const [fileUpload, setFileUpload] = useState();

    function submitHandler(event){
      event.preventDefault()
    const entredTitle = titleInputRef.current.value ;
    const entredContent = contentInputRef.current.value ;

   // const articleData = {
     //   title :  entredTitle,
        //file : fileUpload,
       // content : entredContent
        
    //};
    //props.onAddArticle(articleData) ; 


    const formData  = new FormData() ;
    formData.append('title' , entredTitle);
    formData.append('image' , fileUpload);
    formData.append('content' , entredContent);
    console.log(formData) ;
    fetch("http://localhost:5000/createPost", {
      method: "POST",
      body  : formData 
      //body: JSON.stringify(articleData),
     // headers: {
     //   "Content-Type": "application/json",
     // },
    });



    }
    

    const handleSendFile = file => {
      setFileUpload(file); 
    }
    return (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={props.show}
          onHide={props.onHide}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{textAlign : "center"}}>
            <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex my-2 justify-content-center text-success">
          <h4>Publier un Article</h4>
        </div>
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={submitHandler}>
          <Modal.Body>
         
        
         
          <div className="htmlForm-floating ">
            <label htmlFor="title">Titre</label>
            </div>
            <div className="htmlForm-floating ">
              <input
                type="text"
                id="title"
                required
                className="form-control"
                style={{ height: "30px" }}
                ref = {titleInputRef}
              />
             
            </div>
           
          
          
            <div>Upload an image/video/audio/pdf (optional) !</div>
            <div className="input-group mb-3">
              <FileUpload id="image" 
              refer = "fileInputRef"
              getFile = {handleSendFile}
              errorText="Please provide a file." 
              center/>
             
            </div>
           
          
        
        
          
           
         
         
       
        <div className="htmlForm-floating mb-3">
        <label htmlFor="content">Content</label>
          <input type="text" id="content" ref ={contentInputRef} required className="form-control" />
          
        </div>
          </Modal.Body>
          <Modal.Footer>
         

          <div className="d-flex justify-content-center ">
          <button className="btn btn-secondary grow mx-2" onClick={props.onHide}>
            Annuler
          </button>
        </div>
            <div className="d-flex justify-content-center ">
          <button className="btn btn-success grow mx-2"  type="submit" onClick={props.onHide}>
            Publier
          </button>
        </div>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );

  }

export default PublierArticle;



