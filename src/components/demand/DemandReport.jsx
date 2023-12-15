import { useState, useEffect } from "react";
import DemandChartHeader from "./report/DemandChartHeader";
import DemandForm from "./report/DemandForm";
import DemandMonthChart from "./report/DemandMonthChart";
import demandAxios from "../../pages/demand/BaseURL";

function DemandReport({ currentProduct, notice, demandMethod }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchData();
  }, [currentProduct]);
  const fetchData = async () => {
    try {
      const res = await demandAxios.get(`products/${currentProduct}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="demandProductTable h-screen mx-[20px] overflow-hidden">
      <div className="content flex gap-6 justify-between h-[85%] mt-[70px]">
        <div
          className="monthChartBox w-[60%] h-[100%]  bg-white rounded-md mt-5"
          style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <div className="monthChart h-[100%] flex flex-col justify-between  overflow-y-scroll">
            <DemandChartHeader product={product} />
            <DemandMonthChart currentProduct={currentProduct} />
          </div>
        </div>
        <div
          className="demandForm w-[40%] h-[100%] bg-white rounded-md mt-5 overflow-y-scroll"
          style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <DemandForm
            product={product}
            notice={notice}
            demandMethod={demandMethod}
          />
        </div>
      </div>
    </div>
  );
}

export default DemandReport;
