import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import demandAxios from "../../../pages/demand/BaseURL";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function DemandForm({ product, notice, demandMethod }) {
  const [decreaseCheck, setDecreaseCheck] = useState(false);
  const [increaseCheck, setIncreaseCheck] = useState(true);
  const [amount, setAmount] = useState(0);
  const [justification, setJustification] = useState("");
  const [amountError, setAmountError] = useState(null);
  const [amountEmptyError, setAmountEmptyError] = useState(null);
  const [justificationEmptyError, setJustificationEmptyError] = useState(null);

  const handleDecrease = () => {
    setDecreaseCheck(!decreaseCheck);
    setIncreaseCheck(false);
  };

  const handleIncrease = () => {
    setIncreaseCheck(!increaseCheck);
    setDecreaseCheck(false);
  };

  const handleClick = async () => {
    if (amount === "" || amount === 0) {
      setAmountEmptyError("Amount cannot be empty or zero");
      return;
    }
    setAmountEmptyError(null);
    if (amount > product.averageOrder * 3) {
      setAmountError("Amount should be less than 3 times average order");
      return;
    }

    setAmountError(null);
    if (justification === "") {
      setJustificationEmptyError("Justification cannot be empty");
      return;
    }
    setJustificationEmptyError(null);

    try {
      // Destructure props and state
      const { productId, name } = product;
      const requestData = {
        productId,
        name,
        amount,
        justification,
        type: increaseCheck ? "increase" : "decrease",
      };

      const response = await demandAxios.post(
        "demand/demandNotice",
        requestData
      );

      demandMethod(response.data._id);
      alert("Notice Added");
      setAmount(0);
      setJustification("");
      console.log("Request successful:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="demandFormBox p-5 flex flex-col justify-between gap-5 font-tinos">
      {/* <h1 className=" text-[35px] font-bold " style={{ color: "#000" }}>
        Manage Product
      </h1> */}
      <h2 className="font-tinos  mb-1 text-left text-lg">Manage Product</h2>

      <div
        className="demandForm"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr ",
          gap: "20px",
          gridAutoRows: "minmax(40px, auto)",
          fontFamily: "inter",
        }}
      >
        <div className="dDox1 ">
          <div className="flex flex-col">
            <label htmlFor="productID" className="text-[15px]">
              Product Id
            </label>
            <input
              type="text"
              name="productID"
              id="productID"
              value={product.productId}
              className="border-4 p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <div className="dDox2 flex gap-3">
          <div className="flex flex-col">
            <label htmlFor=" Stock" className="text-[15px]">
              stock
            </label>
            <input
              type="text"
              name="Stock"
              id=" Stock"
              value={product.currentStock}
              className=" p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor=" AverageOrder" className="text-[15px]">
              Average
            </label>
            <input
              type="text"
              name="AverageOrder"
              id=" AverageOrder"
              value={product.averageOrder}
              className=" p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        <div className="dDox3">
          <div className="flex flex-col">
            <label htmlFor="decrease" className="text-[15px]">
              <Checkbox
                {...label}
                defaultChecked
                checked={decreaseCheck}
                onClick={handleDecrease}
              />
              Decrease
            </label>

            <input
              type="number"
              name=""
              id="decrease"
              placeholder="amount..."
              className="border-4 p-3 w-[100%]"
              style={{
                border: `2px solid ${
                  (amountError || amountEmptyError) && decreaseCheck
                    ? "#e34f4f"
                    : "#D9D9D9"
                }`,
                borderRadius: "8px",
                fontSize: "14px",
              }}
              disabled={!decreaseCheck}
              onChange={(e) => {
                setAmount(e.target.value);
                console.log(amount);
              }}
              value={!decreaseCheck ? 0 : amount}
            />
          </div>
        </div>
        <div className="dDox4">
          <div className="flex flex-col">
            <label htmlFor="increase" className="text-[15px]">
              <Checkbox
                {...label}
                defaultChecked
                checked={increaseCheck}
                onClick={handleIncrease}
              />
              Increase
            </label>
            <input
              type="number"
              name=""
              id="increase"
              placeholder="amount..."
              className="border-4 p-3 w-[100%]"
              style={{
                border: `2px solid ${
                  (amountError || amountEmptyError) && increaseCheck
                    ? "#e34f4f"
                    : "#D9D9D9"
                }`,
                borderRadius: "8px",
                fontSize: "14px",
              }}
              disabled={!increaseCheck}
              onChange={(e) => {
                setAmount(e.target.value);
                console.log(amount);
              }}
              value={!increaseCheck ? 0 : amount}
            />
          </div>
        </div>
        <div className="dDox5" style={{ gridColumn: "1/3", gridRow: "span 3" }}>
          <div className="flex flex-col">
            <label htmlFor="productID" className="text-[15px]">
              Justification
            </label>
            <textarea
              type="text"
              name=""
              id=""
              cols="30"
              rows="7"
              className="h-[100%] border-4 p-1"
              placeholder="type here....."
              style={{
                border: `2px solid ${
                  justificationEmptyError ? "#e34f4f" : "#D9D9D9"
                }`,
                borderRadius: "8px",
                fontSize: "14px",
              }}
              onChange={(e) => {
                setJustification(e.target.value);
                console.log(justification);
              }}
              value={justification}
            ></textarea>
          </div>
          {amountError && (
            <p className="text-red-500 text-sm"> {amountError}</p>
          )}{" "}
          {amountEmptyError && (
            <p className="text-red-500 text-sm"> {amountEmptyError}</p>
          )}
          {justificationEmptyError && (
            <p className="text-red-500 text-sm"> {justificationEmptyError}</p>
          )}
        </div>

        <div
          className="dDox6 flex  items-center"
          style={{ fontFamily: "lato" }}
        >
          <button
            className="py-[10px]  w-[80%] rounded-md text-white"
            style={{ backgroundColor: "#04062C" }}
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemandForm;
