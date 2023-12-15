import { Bar, BarChart, ResponsiveContainer, Tooltip, Cell } from "recharts";
const barColors = [
  "#16BFD6",
  "#ff7f0e",
  "#1BDF83",
  "#EC5959",
  "#9467bd",
  "#FFEA2B",
  "#e377c2",
];

function ColorBarChart(props) {
  return (
    <div className="barChartBox font-tinos">
      {/* <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Colors Demand
      </h1> */}
      <h2 className="font-tinos text-center mb-6 text-left text-lg">
        Colors Demand
      </h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "white" }}
            ></Tooltip>
            <Bar dataKey={props.dataKey}>
              {props.chartData &&
                props.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={barColors[index]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ColorBarChart;
