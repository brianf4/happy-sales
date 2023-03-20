import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
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
            "March",
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
        }
      },
      series: [
        {
          name: "series-1",
          data: [-50, 40, 45, 50, 49, 60, 70, 91, 95, 98, 100, 112]
        }
      ]
    };
  }
  
  render() {
    let arrOfItems = this.props.inventory
    let sum = arrOfItems.reduce((sum, current) => sum + current.cost , 0)
    console.log(window.innerWidth === 1191)
    return (
      <div className="flex flex-col grow p-4 bg-neutral-content rounded-md">
        <div className="">
          <h1 className="text-4xl font-bold py-2">${sum}</h1>
          <span className="text-neutral py-2">Sales</span>
        </div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="100%"
            height="600"
          />
      </div>
    );
  }
}

export default Graph;
