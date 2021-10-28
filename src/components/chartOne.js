import "./GrowItem.scss";
function chartOne() {
  return <div
      className="col-md-3  m-1 py-2   bg-body growCard"
      style={{
        height: "fitContent",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
      }}
    >
      <div>
        <img
          style={{ width: "280px", height: "130px" }}
          src="https://static.anychart.com/images/gallery/v8/pie-and-donut-charts-donut-chart.png"
          alt=""
        />
      </div>
    </div>
  ;
}
export default chartOne;
