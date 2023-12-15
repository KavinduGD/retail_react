import React from "react";

function PDF() {
  return (
    <div className="demandProductTable  mx-[20px] rounded-md  overflow-hidden bg-white ">
      <div className="border-solid border-2 border-black h-full m-14">
        <div className="flex justify-center w-full mt-[20px] border-b-2 border-black pb-[20px]">
          <div className="flex justify-between items-center  w-full pr-[250px] pl-[50px]">
            <div>
              <img
                src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1695908785/png-clipart-american-eagle-outfitters-united-states-retail-logo-clothing-united-states-fauna-wildlife-thumbnail-removebg-preview_1_ptfem8.png"
                alt=""
                className="w-[110px]"
              />
            </div>
            <div className="font-tinos font-bold text-6xl tracking-wider">
              Demand Analysis Report
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div
            className="details w-full flex flex-col gap-5 pl-14 pt-[70px]"
            style={{ fontFamily: "tinos" }}
          >
            <div className="flex justify-between ">
              <div className="flex gap-[106px] text-2xl font-bold">
                <p>ProductId</p>
                <p>-</p>
              </div>

              <p className="text-2xl font-semibold">W2032</p>
            </div>
            <div className="flex justify-between">
              <div className="flex  text-2xl font-bold gap-[67px]">
                <p>ProductName</p> <p>-</p>
              </div>
              <p className="text-2xl font-semibold">Women's Summer Dress</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[64px] text-2xl font-bold">
                <p>Demand Type</p> <p>-</p>
              </div>
              <p className="text-2xl font-semibold">Increase</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[119px] text-2xl font-bold">
                <p>Amount</p> <p>-</p>
              </div>
              <p className="text-2xl font-semibold">70</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[63px] text-2xl font-bold">
                <p>Current Stock</p> <p>-</p>
              </div>
              <p className="text-2xl font-semibold">40</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[55px] text-2xl font-bold">
                <p>Average Order</p> <p>-</p>
              </div>

              <p className="text-2xl font-semibold ">240</p>
            </div>

            <p className="text-2xl font-semibold text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              obcaecati similique quis vel assumenda nostrum temporibus minus.
              Nisi aspernatur saepe cupiditate at aliquam magnam provident sunt
              exercitationem nulla quam
            </p>
          </div>
          <div className=" w-full flex  justify-center">
            <img
              src="https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5594.jpg"
              alt=""
              className="w-[400px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDF;
