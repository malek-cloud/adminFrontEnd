function Starter(){
       return (
    <div
      className="col-12 ms-2 "
      style={{
        height: "fitContent",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
      }}
    >
      <div className="row">
        <div className="col-md-2">
          <img
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              color: "white",
              background: "#707070",
              borderRadius: "50%",
              border: "2px solid #404040 ",
              maxWidth: "150px",
              maxHeight: "150px",
            }}
            alt=""
            src="images/miki.png"
          />
        </div>
        <div className="col-md-6" style={{ paddingTop: "20px" , left : "0" }}>
          <h4><em>Malek Guedda</em></h4>
          <div className ="border p-2">
            <b> Résumé : </b>La psychologie est la connaissance empirique ou
            intuitive des sentiments, des idées, des comportements d'une
            personne et des manières de penser, de sentir, d'agir qui
            caractérisent un individu ou un groupe.
          </div>{" "}
          <br />
          
         
        
      </div>
    </div>
    </div>
  );
}
export default Starter;