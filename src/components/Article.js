function Article(props) {
  return (
    <div
      className=" mt-4  bg-body"
      style={{
        height: "fitContent",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
      }}
    >
      <span style={{ display : "inline-flex" }}>
      <span>
      <h4
        style={{
          paddingTop: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft : "30px"
        }}
      >
        Autheur : {props.nom} {props.prenom}
      </h4>
      </span>
      <span style={{paddingTop: "10px", paddingLeft: "10px" }}>14:32 21/09/2021</span>
      </span>
      <h5
        style={{
          textAlign: "center",
          marginTop: "7px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Titre : {props.title}
      </h5>
      <div className="container">
        <div className="row justify-content-evenly">
          <span className="col-lg-8">
            <p>{props.content}</p>
          </span>
          <span className="col-lg-2 mb-2">
            <img
              style={{ width: "150px", height: "150px" }}
              src="images/miki.png"
              alt=""
            />
          </span>
        </div>
        <div className="row justify-content-evenly">
          <button className="col btn btn-success mx-2 my-3">j'aime</button>
          <button className="col btn btn-success mx-5 my-3">commentaire</button>
          <button className="col btn btn-success mx-5 my-3">partage</button>
        </div>
      </div>
    </div>
  );
}
export default Article;
