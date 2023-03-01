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
    return (
      <div>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="500"
          />

      </div>
    );
  }
}

export default Graph;
