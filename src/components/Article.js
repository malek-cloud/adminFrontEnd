function Article(props) {
  return (
    <div
      className=" mt-4 me-1  bg-body"


      style={{
        height: "fitContent",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
        
      }}
    >
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>Ahmed Chouikh</h4>
      <p style={{ textAlign: "center" }}>14:32 21/09/2021</p>
      <h6>{props.title}</h6>
      <div className="container">
        <div className="row justify-content-evenly">
          <span className="col-lg-6">
            <p>{props.content}</p>
          </span>
          <span className="col-lg-4 mb-2">
            <img
              style={{ width: "270px", height: "270px" }}
              src="images/miki.png"
              alt=""
            />
          </span>
        </div>
        <div className="row justify-content-evenly">
          <button className="col btn btn-success mx-5 my-3">j'aime</button>
          <button className="col btn btn-success mx-5 my-3">commentaire</button>
          <button className="col btn btn-success mx-5 my-3">partage</button>
        </div>
        
      </div>
    </div>
  );
}
export default Article;
