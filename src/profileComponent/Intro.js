function Intro() {
  return (
    <div
      className="col-12 ms-2 "
      style={{
        height: "300px",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
      }}
    >
      <div className="row">
        <div className="col-md-3">
          <img
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              color: "white",
              background: "#707070",
              borderRadius: "50%",
              border: "2px solid #404040 ",
              maxWidth: "220px",
              maxHeight: "220px",
            }}
            alt=""
            src="images/miki.png"
          />
        </div>
        <div className="col-md-5" style={{ paddingTop: "20px" }}>
          <h3><em>Malek Guedda</em></h3>
          <div className ="border p-2">
            <b> Résumé : </b>La psychologie est la connaissance empirique ou
            intuitive des sentiments, des idées, des comportements d'une
            personne et des manières de penser, de sentir, d'agir qui
            caractérisent un individu ou un groupe.
          </div>{" "}
          <br />
          
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Formation Accomplis
            </button>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#t">
                  formation 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#t">
                  formation 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#t">
                  formation 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p
          className="col-md-4"
          style={{
            
            display: "flex",
            textAlign: "center",
            verticalAlign: "middle",
            paddingRight: "60px",
            paddingTop: "5%",
            paddingLeft: "30px",
            color :"#0B6623"

          }}
        >
          <h4><em>
            Soyons reconnaissants envers les gens qui nous rendent heureux. Ils
            sont les jardiniers qui font fleurir notre âme .
          </em></h4>
        </p>
      </div>
    </div>
  );
}
export default Intro;
