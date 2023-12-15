import React, { useEffect, useRef, useState } from "react";

import Nav from "./Nav";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function Manufacturer() {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);

  const [activeButton, setActiveButton] = useState(1);

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
      default:
        break;
    }
  };

  useEffect(() => {
    handleTabChange();
  }, [activeButton]);

  return (
    <div className="  w-full  flex flex-col text-center">
      <Nav activeButton={activeButton} setActiveButton={setActiveButton} />

      <div className=" pt-20" ref={page1}>
        <Page1 />
      </div>
      <div className=" pt-20" ref={page2}>
        <Page2 />
      </div>
      <div className=" pt-20" ref={page3}>
        <Page3 />
      </div>
    </div>
  );
}

export default Manufacturer;
