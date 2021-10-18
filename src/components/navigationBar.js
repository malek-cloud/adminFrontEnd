import React from "react";
function navigationBar() {
  return <div style = {{position : "relative"}}>
      <nav className="navbar navbar-light ">
        <div className="container-fluid  sticky-top ">
          <div className="d-flex justify-content-start align-items-center ">
            <a href="#t" className="navbar-brand me-4">
              <img
                style={{ height: "75px" }}
                alt=""
                className="logo"
                src="images/oyemkemlavert.png"
              />
            </a>

            <form className="d-flex mt-1 ms-4">
              <input
                className="form-control me-2 navbar"
                style={{
                  height: "35px ",
                  width: "155px",
                  borderColor: "#198754",
                }}
                type="search"
                placeholder="Recherche..."
                aria-label="Search"
              />
              <h4>
                <i className="bi bi-search text-success"></i>
              </h4>
            </form>
          </div>
          <div className="d-flex justify-content-xl-end">
            <div className="navbar expand-md-1 m-2 me-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input bg-success"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Mode Sombre ?
                </label>
              </div>
            </div>
            <div className="navbar expand-md-1 m-2 ">
              <h3>
                <i className="bi bi-bell-fill text-success"></i>
              </h3>
            </div>
            <div className="navbar expand-md-1 m-2 me-5">
              <h3>
                <i className="bi bi-envelope-fill text-success"></i>
              </h3>
            </div>
            <div className="navbar expand-md-1 m-2">
              <img
                style={{
                  textAlign: "center",
                  color: "white",
                  background: "#707070",
                  borderRadius: "50%",
                  border: "2px solid #404040 ",
                  maxWidth: "50px",
                  maxHeight: "50px",
                }}
                alt=""
                src="images/profile.jpg"
              />
            </div>
            <div className="navbar expand-md-1 m-2">
              <p>Malek Guedda</p>
            </div>
          </div>
        </div>
      </nav>
    </div>;
}
export default navigationBar;
