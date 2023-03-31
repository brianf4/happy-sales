import React from "react";
import Chart from "react-apexcharts";

function Graph(props) {
  const [options, setOptions] = React.useState(
    {
    chart: {
      type: "area",
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    series: [
      {
        name: "series-1",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  });

  props.grabDataArray(options.series[0].data)
 

  return (
    <div className="flex flex-col grow p-4 bg-neutral-content rounded-md">
      <div className="">
        <h1 className="text-4xl font-bold py-2">$</h1>
        <span className="text-neutral py-2">Sales</span>
      </div>
        <Chart
          options={options}
          series={options.series}
          type="area"
          width="100%"
          height="600"
        />
    </div>
  )
}
export default Graph;