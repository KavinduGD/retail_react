import { useEffect, useRef, useState } from "react";
import StockDashBoard from "../../components/stock/StockDashBoard";
import CreateStocks from "../../components/stock/forms/CreateStocks";
import StockTable from "../../components/stock/tables/StockTable";
import NavTabs from "../../components/stock/nav/NavTabs";

const Stock = () => {
  const dashboardRef = useRef(null);
  const createStocksRef = useRef(null);
  const stocksTableRef = useRef(null);

  const [activeButton, setActiveButton] = useState(1);

  const handleTabChange = () => {
    switch (activeButton) {
      case 1:
        dashboardRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        createStocksRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        stocksTableRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleTabChange();
  }, [activeButton]);

  return (
    <div className="w-full  flex flex-col">
      <div
        className="nav-container"
        style={{ position: "relative", zIndex: 999 }}
      >
        <NavTabs
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <div className="downBox h-[3600px] ">
        <div className=" pt-20" ref={dashboardRef}>
          <StockDashBoard />
        </div>
        <div className=" pt-20" ref={createStocksRef}>
          <CreateStocks />
        </div>
        <div className=" pt-20" ref={stocksTableRef}>
          <StockTable />
        </div>
      </div>
    </div>
  );
};

export default Stock;
