import React, { useRef, useState, useContext } from "react";
import  AuthContext  from '../context/authContext';
import "./GrowItem.scss";
import { Modal } from "react-bootstrap";
//import FileBase from "react-file-base64";
//import FileUpload from "../elements/FileUpload";
function PublierArticle(props) {
  const [baseImage, setBaseImage] = useState("");
  const auth = useContext(AuthContext);
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  //const [fileUpload, setFileUpload] = useState("");

  const submitHandler = async (event) => {
    if(!auth.isLoggedIn){
      console.log("pas connecte");
    }else{event.preventDefault();
      console.log(auth.EmployeeId + "hedha l\'employé mel submit");
      const entredTitle = titleInputRef.current.value;
      const entredContent = contentInputRef.current.value;
     // const entredImage = baseImage;
  
      try {
        const formData = new FormData();
        formData.append("title", entredTitle);
        formData.append("employeeId", auth.EmployeeId);
        formData.append("content", entredContent);
      //  console.log(entredImage + " hedhy el image mel front");
        await fetch(`${process.env.REACT_APP_BACKEND_URL}createPost`, {
          method: "POST",
          body: formData,
        });
      } catch (err) {}}
  };

  
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
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex my-2 justify-content-center text-success">
              <h4>Publier un Article</h4>
            </div>
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={submitHandler} enctype="multipart/form-data" >
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
                ref={titleInputRef}
              />
            </div>

            <div>Upload an image/video/audio/pdf (optional) !</div>
            <div className="input-group mb-3">
              <div>
                <div>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />
                  <br></br>
                  <img alt="" src={baseImage} height="200px" />
                </div>

                {/*<FileBase
                  type="file"
                  multiple={false}
                  onCh
                  onDone={
                      ({ base64 }) => setFileUpload({ base64 })}
                />*/}
              </div>
            </div>

            <div className="htmlForm-floating mb-3">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                id="content"
                ref={contentInputRef}
                required
                className="form-control"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-center ">
              <button
                className="btn btn-secondary grow mx-2"
                onClick={props.onHide}
              >
                Annuler
              </button>
            </div>
            <div className="d-flex justify-content-center ">
              <button
                className="btn btn-success grow mx-2"
                type="submit"
                onClick={props.onHide}
              >
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
