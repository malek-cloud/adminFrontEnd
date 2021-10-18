import { useRef } from "react";

function PublierArticle(props) {
  const titleInputRef = useRef();
  const fileInputRef = useRef();
  const contentInputRef = useRef();

  
   


    function submitHandler(event){
      event.preventDefault()
    const entredTitle = titleInputRef.current.value ;
    const entredFile = fileInputRef.current.value ;
    const entredContent = contentInputRef.current.value ;

    const articleData = {
        title :  entredTitle,
        file : entredFile,
        content : entredContent
        
    };
    props.onAddArticle(articleData) ; 
    }
  
 
    return (
      <div
      >
        <div className="d-flex my-2 justify-content-center text-success">
          <h4>Publier un Article</h4>
        </div>
        <form onSubmit={submitHandler}>
        <div className="row g-2 " >
          <div className="col-md-9 ">
            <div className="htmlForm-floating mt-4">
              <input
                type="text"
                id="title"
                required
                className="form-control"
                style={{ height: "30px" }}
                ref = {titleInputRef}
              />
              <label htmlFor="title">Titre</label>
            </div>
          </div>
          <div className="col-md">
            <div>Upload an image/video/audio/pdf (optional) !</div>
            <div className="input-group mb-3">
              <input type="file" id="file" ref ={fileInputRef} className="form-control" />
              <label className="input-group-text" htmlFor="file" >
                Upload
              </label>
             
            </div>
          </div>
        </div>
        <div className="htmlForm-floating mb-3">
          <input type="text" id="content" ref ={contentInputRef} required className="form-control" />
          <label htmlFor="content">Content</label>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-success"  type="submit">
            Publier
          </button>
        </div>
        </form>
      </div>
    );
  }

export default PublierArticle;
