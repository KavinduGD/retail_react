import React from "react";

function DemandNav({ activeButton, setActiveButton }) {
  const activate = (prop) => {
    setActiveButton(prop);
  };

  return (
    <div className=" backdrop-blur-sm fixed pr-28 text-2xl w-full h-20 flex font-tinos items-center justify-between z-50">
      {/* <h1 className=" h-fit ml-10 font-extrabold">Demand Analysis</h1> */}
      <h1 className=" h-fit ml-10 ">Demand Analysis</h1>
      <div className=" mr-10 p-2  flex ">
        <button
          className={`ml-8 text-lg drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear rounded-md  ${
            activeButton === 1
              ? "text-gray-800 font-extrabold"
              : "text-gray-400 "
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(1);
          }}
        >
          Dashboard
        </button>

        <button
          className={`ml-8 text-lg drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear rounded-md  ${
            activeButton === 2
              ? "text-gray-800 font-extrabold"
              : "text-gray-400"
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(2);
          }}
        >
          Table
        </button>

        <button
          className={`ml-8 text-lg drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear  rounded-md  ${
            activeButton === 3
              ? "text-gray-800 font-extrabold"
              : "text-gray-400"
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(3);
          }}
        >
          Report
        </button>
        <button
          className={`ml-8 text-lg drop-shadow-md bg-white py-2 px-8 transition-all duration-700 ease-linear  rounded-md  ${
            activeButton === 4
              ? "text-gray-800 font-extrabold"
              : "text-gray-400"
          }`}
          onClick={(e) => {
            e.preventDefault();
            activate(4);
          }}
        >
          Notices
        </button>
      </div>
    </div>
  );
}

export default DemandNav;
