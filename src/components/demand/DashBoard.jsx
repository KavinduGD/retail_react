import PieChartBox from "./dashboard/PieChartBox";
import LineChartBox from "./dashboard/LineChartBox";
import TopBox from "./dashboard/TopBox";
import AgeBarChart from "./dashboard/AgeBarChart";
import ColorBarChart from "./dashboard/ColorbarChart";
import MenWomenChart from "./dashboard/MenWomenChart";
import { useEffect, useState } from "react";

import demandAxios from "../../pages/demand/BaseURL";

function DashBoard() {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await demandAxios.get("demand/dashboard");
      setDashboardData(result.data);
    };
    fetchData();
  }, []);

  const boxStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
  };

  return (
    <div className="DemandDashboard">
      <div
        className="demandGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "minmax(180px, auto)",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          className="box1"
          style={{ ...boxStyle, gridColumn: "span 1", gridRow: "span 3" }}
        >
          <TopBox top={dashboardData.topDealProducts} />
        </div>
        <div className="box2" style={boxStyle}>
          <LineChartBox {...dashboardData.chartBoxUser} />
        </div>
        <div className="box3" style={boxStyle}>
          <LineChartBox {...dashboardData.chartBoxProduct} />
        </div>
        <div
          className="box4"
          style={{ ...boxStyle, gridColumn: "span 1", gridRow: "span 3" }}
        >
          <PieChartBox chartData={dashboardData.pieData} />
        </div>
        <div className="box5" style={boxStyle}>
          <LineChartBox {...dashboardData.chartBoxRevenue} />
        </div>
        <div className="box6" style={boxStyle}>
          <LineChartBox {...dashboardData.chartBoxConversion} />
        </div>
        <div
          className="box7"
          style={{ ...boxStyle, gridColumn: "span 2", gridRow: "span 2" }}
        >
          <MenWomenChart chartData={dashboardData.menWomenBar} />
        </div>
        <div className="box8" style={boxStyle}>
          <AgeBarChart chartData={dashboardData.ageData} />
        </div>
        <div className="box9" style={boxStyle}>
          <ColorBarChart {...dashboardData.barChartBoxRevenue} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
