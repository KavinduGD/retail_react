import React, { useRef } from "react";
import LineChartNetProfit from "../../components/profit/LineChartEachNetProfit";
import LineChartGrossProfit from "../../components/profit/LineChartEachGrossProfit";

const sampleImage =
	"https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5594.jpg";

function ItemDetails({ isVisible, onClose }) {
	if (!isVisible) return null;

	const handleClose = () => {
		onClose();
	};

	// Example product details
	const productDetails = {
		serialNumber: "123456",
		productName: "Ladies T-Shirt - Grey",
		pricePerUnit: "$19.99",
		costPrice: "$10.00",
		quantity: 100,
		profit: "$9.99",
		image: sampleImage,
	};

	// Create references for scrolling to sections
	const detailsSectionRef = useRef(null);
	const netProfitSectionRef = useRef(null);
	const grossProfitSectionRef = useRef(null);

	// Function to scroll to the details section
	const scrollToDetails = () => {
		detailsSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	// Function to scroll to the Net Profit section
	const scrollToNetProfit = () => {
		netProfitSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	// Function to scroll to the Gross Profit section
	const scrollToGrossProfit = () => {
		grossProfitSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="fixed inset-0 flex justify-center items-center">
			<div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
			<div className="w-[1000px] flex flex-col relative">
				<div className="flex justify-end">
					<button className="text-white text-3xl" onClick={handleClose}>
						X
					</button>
				</div>

				<div
					className="bg-white rounded-lg p-6 text-center shadow-md relative"
					style={{ maxHeight: "600px", overflowY: "auto" }}>
					{/* Buttons on the left */}
					<div className="fixed left-12 top-1/4 transform -translate-y-1/4 flex flex-col space-y-3">
						<button
							className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full"
							onClick={scrollToDetails}>
							Item Details
						</button>

						<button
							className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full"
							onClick={scrollToNetProfit}>
							Net Profit
						</button>

						<button
							className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full"
							onClick={scrollToGrossProfit}>
							Gross Profit
						</button>
					</div>

					{/* Product and Material Details */}

					<div
						className="grid grid-cols-1 gap-2 border border-gray-300 "
						ref={detailsSectionRef}>
						<div className="tile">
							<h1 className="text-2xl font-semibold mb-4">
								Item Serial Number: {productDetails.serialNumber}
							</h1>
							<div className="flex items-center justify-center">
								<img
									src={productDetails.image}
									alt="Product Image"
									className="rounded-md shadow-lg mb-4"
									style={{ maxWidth: "300px" }} // Adjust the maxWidth as needed
								/>
								<div className="ml-6">
									<strong className="text-gray-600 text-sm">
										Product Name:
									</strong>{" "}
									<span className="text-sm">{productDetails.productName}</span>
									<div className="mb-2">
										<strong className="text-gray-600 text-sm">Price:</strong>{" "}
										<span className="text-sm">
											{productDetails.pricePerUnit}
										</span>
									</div>
									<div className="mb-2">
										<strong className="text-gray-600 text-sm">
											Cost Price:
										</strong>{" "}
										<span className="text-sm">{productDetails.costPrice}</span>
									</div>
									<div className="mb-2">
										<strong className="text-gray-600 text-sm">Quantity:</strong>{" "}
										<span className="text-sm">{productDetails.quantity}</span>
									</div>
									<div className="mb-2">
										<strong className="text-gray-600 text-sm">Profit:</strong>{" "}
										<span className="text-sm">{productDetails.profit}</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Charts */}
					<div
						className="grid grid-cols-1 gap-6 mt-6 border border-gray-300"
						ref={netProfitSectionRef}>
						<div className="bg-white rounded-lg p-6 text-center shadow-md">
							<LineChartNetProfit />
						</div>
					</div>

					{/* Gross Profit Chart */}
					<div
						className="grid grid-cols-1 gap-6 mt-6 border border-gray-300"
						ref={grossProfitSectionRef}>
						<div className="bg-white rounded-lg p-6 text-center shadow-md">
							<LineChartGrossProfit />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
