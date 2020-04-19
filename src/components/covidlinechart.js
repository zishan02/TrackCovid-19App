import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class CovidLineChart extends Component {
    constructor(props) {
      super(props);
      this.state = {
      
        series: [{
            name:"",
            data: []
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Total Confirmed Cases',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: []
          }
        },
      
      
      };
    }

    componentDidMount() {
      fetch("https://trackcovid-19.herokuapp.com/fetchChartData")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              series: [{
                name: "Confirmed Cases",
                data: result.yAxis
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Total Confirmed Cases',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: result.xAxis
              }

            }
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              error
            });
          }
        )
     }
  

    render() {
     console.log(this.state);
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>)}
}
export default CovidLineChart;