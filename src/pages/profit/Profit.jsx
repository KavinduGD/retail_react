import React, { useState, useEffect } from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Barchart from "../../components/profit/BarchartGrossProfit";
import BarchartNetProfit from "../../components/profit/BarchartNetProfit";
import ProductTable from "../../components/profit/ProfitProductTable";
import axios from "axios";

const Profit = () => {
	const boxStyle = {
		padding: "20px",
		borderRadius: "10px",
		backgroundColor: "#fff",
		boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
	};
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [totalSalesData, setTotalSalesData] = useState([]);
	const [totalProfitData, setTotalProfitData] = useState([]);
	const [totalProductSoldQty, setTotalProductSoldQty] = useState([]);
	const [profitData, setProfitData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3001/sales/totalProfit"); // Replace with the actual API endpoint on your server
				if (response.ok) {
					const data = await response.json();
					setProfitData(data);
				} else {
					console.error("Error fetching data");
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:3001/sales/totalProductSoldQty")
			.then((response) => {
				setTotalProductSoldQty(response.data.salesByQty); // Set totalProductSoldQty
				setLoading(false);
				console.log("totalProductSoldQty", response.data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<div
				style={{ zIndex: 999 }}
				className=" backdrop-blur-sm fixed pr-28 text-2xl w-full h-20 flex font-tinos items-center justify-between">
				<h1 className=" h-fit ml-10 ">Profit Analysis</h1>
			</div>
			<div className="container pt-12">
				<div>
					<div className="container mx-auto">
						{/* Title */}
						{/* <div className="bg-white py-8 px-4 sm:px-8 rounded-lg shadow-lg text-center">
					<h1 className="text-xl md:text-5xl font-semibold text-blue-900 leading-tight cursor-pointer">
						PROFIT PREDICTION
					</h1>
				</div> */}

						{/* Grid for Cards */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(4, 1fr)",
								gridAutoRows: "minmax(180px, auto)",
								gap: "20px",
								padding: "20px",
							}}></div>
						<div className="grid md:grid-cols-3 gap-4">
							{/* Card 1: Profit Prediction */}
							<div className="bg-white rounded-lg p-6 text-center shadow-md">
								<h2 className="font-tinos">Total Sales (Year)</h2>
								<h1 className="text-2xl font-bold">
									Rs.{profitData.totalSales}
								</h1>
								{/* <FaRegCalendarMinus className="title flex items-center gap-[10px]" /> */}
							</div>

							{/* Card 2: No. of Products */}
							<div className="bg-white rounded-lg p-6 text-center shadow-md">
								<h2 className="font-tinos">Total Profit (Year)</h2>
								<h1 className="text-2xl font-bold">Rs.{profitData.profit}</h1>
							</div>

							{/* Card 3: No. of Products */}
							<div className="bg-white rounded-lg p-6 text-center shadow-md">
								<h2 className="font-tinos">No. of Products</h2>
								<h1 className="text-2xl font-bold">{totalProductSoldQty}</h1>
							</div>
						</div>

						<div className="flex mt-5 gap-4">
							{/* Chart 1 */}
							<div className="w-2/4 bg-white rounded-lg p-6 text-center shadow-md">
								<Barchart />
							</div>

							{/* Chart 2 */}
							<div className="w-2/4 bg-white rounded-lg p-6 text-center shadow-md">
								<BarchartNetProfit />
							</div>

							{/* Table */}
						</div>

						<div className="flex mt-5 gap-4">
							<div
								className="w-full bg-white rounded-lg shadow-lg p-4"
								style={{ zIndex: 1 }}>
								<h2 className="text-left  ml-4 font-tinos text-2xl">
									Profit-Product Table
								</h2>

								<div className="container mx-auto mt-4 p-2 border border-gray-300 rounded-lg max-h-[680px]">
									<ProductTable />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profit;
