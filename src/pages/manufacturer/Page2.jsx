import React from "react";
import TableCom from "../../components/manufacturer/page2/TableCom";

function Page2() {
  return (
    <div
      className=" px-8 py-8 bg-white drop-shadow-lg rounded-xl w-[95%] ml-[1.5%] font-tinos text-2xl"
      id="page2"
    >
      <h2 className="text-left  ml-4">Manufacturer Performance</h2>
      <TableCom />
    </div>
  );
}

export default Page2;
