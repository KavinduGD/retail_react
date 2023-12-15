import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import demandAxios from "../../../pages/demand/BaseURL";

function PdfChart({ productId }) {
  console.log("🚀 ~ file: PdfChart.jsx:15 ~ PdfChart ~ productId:", productId);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      const [salesRes, predictionRes] = await Promise.all([
        demandAxios.get(`products/productId/${productId}`),
        demandAxios.get(`demand/demandBydRealProductId/${productId}`),
      ]);

      const salesData = salesRes.data.sales;
      const predictionData = predictionRes.data;

      const dataArray = [];

      salesData.forEach((item) => {
        const year = item.year;
        const month = item.month.slice(0, 3);
        const count = item.count;

        const existingEntry = dataArray.find((entry) => entry.month === month);

        if (existingEntry) {
          existingEntry[year] = count;
        } else {
          const newEntry = { month: month };
          newEntry[year] = count;
          newEntry[year === "2022" ? "2023" : "2022"] = 0;
          dataArray.push(newEntry);
        }
      });

      dataArray.forEach((entry) => {
        if (entry.month === predictionData.predictedMonth.slice(0, 3)) {
          entry["2023"] = predictionData.prediction;
        }
      });

      setData(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100%] mt-5 flex flex-col item-start items-center ">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 20,
          }}
        >
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "white" }}
          ></Tooltip>
          <XAxis dataKey="month" />
          <YAxis type="number" domain={[0, "dataMax + 40"]} />
          <CartesianGrid strokeDasharray="3 3" />

          <Bar dataKey="2022">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#64748B" />
            ))}
          </Bar>
          <Bar dataKey="2023">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.month === "Oct" ? "#cc7670" : "#CBD5E1"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div
        className="flex  gap-6 items-center"
        style={{ fontFamily: "inter", fontSize: "14px", fontWeight: "600" }}
      >
        <div
          className="high flex flex-col  items-center"
          style={{ color: "#64748B" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 -700 rounded-full"
              style={{ backgroundColor: "#64748B" }}
            />
            <div>Last Year</div>
          </div>
        </div>
        <div
          className="high flex flex-col  items-center"
          style={{ color: "#a3adb8" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 -700 rounded-full"
              style={{ backgroundColor: "#a3adb8" }}
            />
            <div>This Year</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfChart;
