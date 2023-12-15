import { Link } from "react-router-dom";
import { Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

function LineChartBox(props) {
  return (
    <div className="chartBox flex h-full" style={{ fontFamily: "Inter" }}>
      <div
        className="boxInfo  flex flex-col justify-between"
        style={{ flex: "3" }}
      >
        <div className="title flex items-center gap-[10px]">
          <img src={props.icon} className="w-8 h-8" />
          <span className="">{props.title}</span>
        </div>
        <h1 className="text-2xl font-bold">{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>

      <div
        className="chartInfo  flex flex-col justify-between "
        style={{ flex: "2" }}
      >
        <div className="chart w-full h-full flex-1">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts flex flex-col text-right">
          <span
            className="percentage font-bold text-sm"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </span>
          <span className="duration text-sm">This month</span>
        </div>
      </div>
    </div>
  );
}

export default LineChartBox;
