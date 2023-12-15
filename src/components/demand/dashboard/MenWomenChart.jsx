import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function MenWomenChart({ chartData }) {
  return (
    <div className="menWomenChart w-full h-full font-tinos">
      {/* <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Men vs Women Demand
      </h1> */}
      <h2 className="font-tinos text-center mb-6 text-left text-lg">
        Men vs Women Demand
      </h2>
      <div className="menWomenChart w-full h-full mt-10">
        <ResponsiveContainer width="100%" height={360}>
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Women"
              stroke="#64748B"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Men"
              stroke="#CBD5E1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MenWomenChart;
