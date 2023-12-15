import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AgeBarChart({ chartData }) {
  return (
    <div className="ageBarChart font-tinos">
      {/* <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Age Demand
      </h1> */}
      <h2 className="font-tinos text-center mb-6 text-left text-lg">
        Age Demand
      </h2>
      <div className="ageChart">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Women" fill="#64748B" />
            <Bar dataKey="Men" fill="#CBD5E1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AgeBarChart;
