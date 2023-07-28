import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function Graph(props) {
  let total = props.soldItems.reduce((sum, current) => sum + current.cost, 0)
  

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
        height="400"
      />
    </div>
  )
}
export default Graph;