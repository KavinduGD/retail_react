import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function PieChartBox({ chartData }) {
  if (!chartData || chartData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pieChartBox h-full flex flex-col justify-center font-tinos">
      {/* <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Demand Comparison
      </h1> */}
      <h2 className="font-tinos  text-left text-lg">Demand Comparison</h2>
      <div className="chart flex items-center justify-center h-full w-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={chartData}
              innerRadius={"60%"}
              outerRadius={"100%"}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options flex justify-center gap-[10px]">
        {chartData.map((item) => (
          <div
            className="option flex flex-col gap-[10px] items-center"
            key={item.name}
          >
            <div className="title flex gap-[10px] items-center">
              <div
                className="dot w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{Math.floor((item.value / 8400) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
