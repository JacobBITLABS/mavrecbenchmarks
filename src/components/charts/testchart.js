import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
    xaxis: {
      categories: ["Car", "Other", "Street Light", "Person", "Traffic Light", "Bicycle", "Van", "Truck"]
    },
    chart: {
        id: 'vuechart-example',
        toolbar: {
          show: false,
          download: true,
          selection: true,
          zoom: false,
          zoomin: false,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
    }
  };
  const series = [
    {
      name: "Train",
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: "Test",
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    },
    {
      name: "Validation",
      data: [24, 20, 5, 75, 42, 79, 72, 35]
    }
  ];

  return <Chart  width="140%" options={options} series={series} type="bar" />;
};
export default ApexChart;
