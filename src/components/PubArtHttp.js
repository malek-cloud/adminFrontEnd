import PublierArticle from "./PublierArticle";
//import {useHistory} from 'react-router-dom' ;
function PubArtHttp() {
  const  addArticleHandler =articleData => {
    const formData  =FormData() ;
    formData.append(articleData[0]);
    formData.append(articleData[1]);
    formData.append(articleData[2]);
    fetch("http://localhost:5000/createPost", {
      method: "POST",
      body  : formData 
      //body: JSON.stringify(articleData),
     // headers: {
     //   "Content-Type": "application/json",
     // },
    });
  }

  return (
    <div
      className="col-sm-9 m-1 mt-4 me-4 bg-body"
      style={{
        height: "fitContent",
        boxShadow: "0px 0px 15px -2px #B0B0B0",
        borderRadius: "15px",
      }}
    >
      <PublierArticle onAddArticle={addArticleHandler} />
    </div>
  );
}
export default PubArtHttp;
