import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";

export const BarChart = ({ chartData, title }) => {
  return (
    <div>
      <Bar
        height={400}
        width={500}
        data={chartData}
        options={{
          backgroundColor: "white",
          color: "black",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "black",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          scales: {
            x: {
              ticks: {
                color: "white",
              },
            },
            y: {
              ticks: {
                color: "white",
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export const StackedBarChart = ({ chartData, title }) => {
  return (
    <div>
      <Bar
        height={400}
        width={500}
        data={chartData}
        options={{
          backgroundColor: "white",
          color: "black",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "black",
              font: {
                size: 30,
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          responsive: true,
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              ticks: {
                color: "white",
              },
              stacked: true,
            },
            y: {
              ticks: {
                color: "white",
              },
              stacked: true,
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export const PieChart = ({ chartData, title }) => {
  return (
    <div>
      <Pie
        height={400}
        width={500}
        data={chartData}
        options={{
          color: "black",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "black",
              font: {
                size: 30,
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export const DoughnutChart = ({ chartData, title }) => {
  return (
    <div>
      <Doughnut
        height={400}
        width={500}
        data={chartData}
        options={{
          backgroundColor: "white",
          color: "black",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "black",
              font: {
                size: 30,
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export const LineChart = ({ chartData, title }) => {
  return (
    <div>
      <Line
        height={400}
        width={500}
        data={chartData}
        options={{
          color: "black",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "black",
              font: {
                size: 30,
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          scales: {
            x: {
              ticks: {
                color: "black",
              },
            },
            y: {
              ticks: {
                color: "black",
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
