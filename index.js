const highcharts = require("highcharts");
const highchartsGantt = require("highcharts/modules/gantt");
highchartsGantt(highcharts);

let component = document.getElementById("container");
highcharts.ganttChart(component, {
  title: {
    text: "PROJECT & TASK MANAGEMENT GANTT CHART",
  },
  xAxis: [
    {
      min: Date.UTC(2022, 10, 17),
      max: Date.UTC(2022, 10, 30),
    },
  ],
  series: [
    {
      name: "Frontend Team",
      data: [
        {
          id: "Frontend",
          name: "Frontend Development Team",
          start: Date.UTC(2022, 10, 18),
          end: Date.UTC(2022, 10, 25),
        },
        {
          name: "Overlapping of text",
          status: "assigned",
          priority: "high",
          user: "Siuly Tamez",
          start: Date.UTC(2022, 10, 20),
          end: Date.UTC(2022, 10, 25),
          parent: "Frontend",
        },
        {
          name: "Button disabled",
          status: "assigned",
          priority: "high",
          user: "Siuly Tamez",
          start: Date.UTC(2022, 10, 23),
          end: Date.UTC(2022, 10, 25),
          parent: "Frontend",
        },
        {
          name: "Incorrect content displayed",
          start: Date.UTC(2022, 10, 24),
          end: Date.UTC(2022, 10, 25),
          parent: "Frontend",
        },
      ],
    },
    {
      name: "Backend Team",
      data: [
        {
          id: "Backend",
          name: "Backend Development Team",
          start: Date.UTC(2022, 10, 23),
          end: Date.UTC(2022, 10, 29),
        },
        {
          name: "API is sending incorrect response",
          id: 'api',
          start: Date.UTC(2022, 10, 23),
          end: Date.UTC(2022, 10, 25),
          parent: "Backend",
        },
        {
          name: "Error for endpoint /users",
          start: Date.UTC(2022, 10, 25),
          end: Date.UTC(2022, 10, 29),
          parent: "Backend",
          dependency: 'api'
        },
      ],
    },
    {
      name: "Systems Team",
      data: [
        {
          id: "System",
          name: "Systems and Deployment Team",
          start: Date.UTC(2022, 10, 28),
          end: Date.UTC(2022, 10, 29),
        },
        {
          name: "API is sending incorect response",
          start: Date.UTC(2022, 10, 28),
          end: Date.UTC(2022, 10, 29),
          parent: "System",
        },
      ],
    },
  ],
});

