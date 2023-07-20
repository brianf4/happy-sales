import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function Graph(props) {
  let total = props.soldItems.reduce((sum, current) => sum + current.cost, 0)

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [chartHeight, setChartHeight] = useState(null)

  // useEffect(() => {
  //   window.addEventListener("resize", function () {
  //     setWindowWidth(window.innerWidth)
  //   })
  // }, [])
  

  return (
    <div className="flex flex-col grow p-4 bg-neutral-content rounded-md">
      <div className="">
        <span id="rev" className="block font-medium text-neutral">Total Revenue</span>
        <h1 className="text-4xl font-bold py-2">${total}</h1>
      </div>
      <Chart
        options={props.graphOptions}
        series={props.graphOptions.series}
        type="area"
        width="100%"
        height="300"
      />
    </div>
  )
}
export default Graph;