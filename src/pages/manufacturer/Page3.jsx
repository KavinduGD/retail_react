import React from "react";
import RegForm from "../../components/manufacturer/page3/RegForm";
import RadarChartComponent from "../../components/manufacturer/page3/RadarChartComponent";

function Page3() {
  return (
    <div className="h-screen w-full flex justify-between" id="page3">
      <RegForm />

      <RadarChartComponent />
    </div>
  );
}

export default Page3;
