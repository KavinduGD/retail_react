import React, { useEffect, useRef, useState } from "react";
//import Head from "../../components/demand/Head";
import DashBoard from "../../components/demand/DashBoard";
import DemandProductTable from "../../components/demand/DemandProductTable";
import DemandReport from "../../components/demand/DemandReport";
import DemandNav from "../../components/demand/DemandNav";
import DemandNoticeTable from "../../components/demand/demandNoticeTable";
import demandAxios from "./BaseURL";

function Demand() {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const [activeButton, setActiveButton] = useState(1);
  const [allProducts, setAllProducts] = useState([]);

  const [currentProduct, setCurrentProduct] = useState(
    "6515badf447ad6772b7919e2"
  );

  const [demandNotice, setDemandNotice] = useState("");

  const handleTabChange = () => {
    // Scroll to the selected tab's reference
    switch (activeButton) {
      case 1:
        page1.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        page2.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        page3.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        page4.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleTabChange();
  }, [activeButton]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await demandAxios.get("products/");
      setAllProducts(response.data);

      // Set the initial currentProduct to a random product _id
      if (response.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * response.data.length);
        setCurrentProduct(response.data[randomIndex]._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="demand overflow-hidden  " ref={page1}>
      <div className="upBox flex  mt-11 mb-8 items-center  ">
        <DemandNav
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <div className="downBox ">
        <div>
          <DashBoard />
        </div>
        <div ref={page2}>
          <DemandProductTable
            currentProduct={currentProduct}
            method={setCurrentProduct}
          />
        </div>
        <div ref={page3}>
          <DemandReport
            currentProduct={currentProduct}
            notice={demandNotice}
            demandMethod={setDemandNotice}
          />
        </div>
        <div ref={page4}>
          <DemandNoticeTable
            notice={demandNotice}
            demandMethod={setDemandNotice}
            all={allProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default Demand;
