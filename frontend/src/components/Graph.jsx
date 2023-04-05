import React, { useEffect } from "react";
import Chart from "react-apexcharts";

function Graph(props) {
  

  
  

  

  


  // console.log(options.series[0].data)
  // let totalSum = props.soldItems.reduce((sum, current) => sum + current.cost, 0)
  // console.log(totalSum)
  // console.log(props.soldItems[0])
  

  return (
    <div className="flex flex-col grow p-4 bg-neutral-content rounded-md">
      <div className="">
        <h1 className="text-4xl font-bold py-2">$</h1>
        <span className="text-neutral py-2">Sales</span>
      </div>
        <Chart
          options={props.graphOptions}
          series={props.graphOptions.series}
          type="area"
          width="100%"
          height="600"
        />
    </div>
  )
}
export default Graph;