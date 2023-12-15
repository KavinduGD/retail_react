import React from "react";

function Head() {
  return (
    <>
      {/* search */}
      <div className="search w-[100%]">
        <div className="ml-5 relative">
          <div className="absolute top-5 left-3">
            <svg
              class="w-7 h-7 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            placeholder="search product"
            className="w-[100%] h-[68px] rounded-md pl-[60px] text-xl shadow-xl"
          />
        </div>
      </div>
      {/* tabs */}
      <div className="tabs flex items-center mr-[100px] gap-6">
        <button
          type="button"
          className=" rounded-2xl  font-semibold text-[17px] w-[135px]  h-[50px] shadow-lg"
          style={{
            background: "#A5BFDA",
            color: "#04062C",
            fontFamily: "lato",
          }}
        >
          DashBoard
        </button>
        <button
          type="button"
          className=" rounded-2xl  font-semibold text-[17px] w-[135px]  h-[50px] shadow-lg"
          style={{
            background: "#A5BFDA",
            color: "#04062C",
            fontFamily: "lato",
          }}
        >
          Products
        </button>
        <button
          type="button"
          className=" rounded-2xl  font-semibold text-[17px] w-[135px]  h-[50px] shadow-lg"
          style={{
            background: "#A5BFDA",
            color: "#04062C",
            fontFamily: "lato",
          }}
        >
          Predicts
        </button>
        <button
          type="button"
          className=" rounded-2xl  font-semibold text-[17px] w-[135px]  h-[50px] shadow-lg "
          style={{
            background: "#A5BFDA",
            color: "#04062C",
            fontFamily: "lato",
          }}
        >
          Reports
        </button>
      </div>
    </>
  );
}

export default Head;
