import "./GrowItem.scss";
function clientCarousel() {
  return (
    <div
      className="col  m-1 float-end  bg-body   bg-body"
      style={{ boxShadow: "0px 0px 15px -2px 	#B0B0B0", borderRadius: "15px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col py-2 ms-3 my-3 me-1 shadow rounded growCard">
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    color: "white",
                    background: "#707070",
                    borderRadius: "50%",
                    border: "2px solid #404040 ",
                    maxWidth: "30px",
                    maxHeight: "30px",
                  }}
                  src="images/miki.png"
                  alt=""
                />
              </div>
              <div>
                <h6 style={{ textAlign: "center", fontSize: "13px" }}>
                  Malek Guedda
                </h6>
              </div>
              <div style={{ fontSize: "10px", textAlign: "center" }}>
                dernier msg: 18/02/2021
              </div>
            </div>
          </div>
          <div className="col py-2 mx-1 my-3 shadow rounded growCard">
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <img
                  alt=""
                  style={{
                    color: "white",
                    background: "#707070",
                    borderRadius: "50%",
                    border: "2px solid #404040",
                    maxWidth: "30px",
                    maxHeight: "30px",
                  }}
                  src="images/miki.png"
                />
              </div>
              <div>
                <h6 style={{ textAlign: "center", fontSize: "13px" }}>
                  Malek Guedda
                </h6>
              </div>
              <div style={{ fontSize: "10px", textAlign: "center" }}>
                dernier msg: 18/02/2021
              </div>
            </div>
          </div>
          <div
            className="col py-2 ms-2 my-3 me-3 shadow rounded growCard"
            style={{ width: "80px" }}
          >
            <div className="container">
              <div style={{ textAlign: "center", fontSize: "13px" }}>
                <img
                  style={{
                    color: "white",
                    background: "#707070",
                    borderRadius: "50%",
                    border: "2px solid #404040",
                    maxWidth: "30px",
                    maxHeight: "30px",
                  }}
                  src="images/miki.png"
                  alt=""
                />
              </div>
              <div>
                <h6 style={{ textAlign: "center", fontSize: "13px" }}>
                  Malek Guedda
                </h6>
              </div>
              <div style={{ fontSize: "10px", textAlign: "center" }}>
                dernier msg: 18/02/2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default clientCarousel;
