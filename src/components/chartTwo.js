import "./GrowItem.scss";
function chartTwo() {
  return (
    <div
      className="col-md-3 py-2 m-1  bg-body   bg-body growCard"
      style={{
        height: "fitContent",
        boxShadow: "0px 0px 15px -2px 		#B0B0B0",
        borderRadius: "15px",
      }}
    >
      <div>
        <img
          style={{ width: "280px", height: "130px" }}
          src="https://wcs.smartdraw.com/chart/img/clustered-bar-chart.png?bn=15100111805"
          alt=""
        />
      </div>
    </div>
  );
}
export default chartTwo;
