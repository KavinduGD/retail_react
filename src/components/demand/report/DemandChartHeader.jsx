function DemandChartHeader({ product }) {
  return (
    <div className="demandChartHeader flex justify-between gap-10 p-8 pb-0 font-tinos">
      <div className="demandDetails w-full flex flex-col">
        {/* <h1 className=" text-[35px] font-bold  " style={{ color: "#000" }}>
          Monthly Demand
        </h1> */}
        <h2 className="font-tinos mb-6 text-left text-lg">Monthly Demand</h2>
        <div className="productDetails flex justify-between gap-14 font-bold mt-7">
          <div className="flex flex-col w-full">
            <span className="text-gray-500">
              product Id - {product.productId}
            </span>
            <span className="text-base">{product.name}</span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-gray-500">Manufacture</span>
            <span className="text-base">{product.manufacture}</span>
          </div>
        </div>
      </div>
      <div className="demandDetails6">
        <img src={product.imageUrl} alt="" className="w-[250px]" />
      </div>
    </div>
  );
}

export default DemandChartHeader;
