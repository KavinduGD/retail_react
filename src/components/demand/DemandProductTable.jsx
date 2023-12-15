import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Box from "@mui/material/Box";
import ProgressBar from "./table/ProgressBar";
import ImageCard from "./table/ImageCard";
import DemandTypeCard from "./table/DemandTypeCard";
import demandAxios from "../../pages/demand/BaseURL";

const columns = [
  {
    field: "productId",
    headerName: "ID",
    width: 90,
    flex: 0.5,
    align: "center",
    headerAlign: "center",
    type: "string",
  },
  {
    field: "imageUrl",
    headerName: "Image",
    editable: true,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return <ImageCard url={params.value} />;
    },
  },
  {
    field: "name",
    headerName: "Item",
    editable: true,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "category",
    headerName: "Category",
    editable: true,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "manufacture",
    headerName: "Manufacture",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "demandType",
    headerName: "Demand Type",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return <DemandTypeCard type={params.value} />;
    },
  },
  {
    field: "lastMonthSales",
    headerName: "Last Month Sales",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "thisMonthSales",
    headerName: "This Month Sales",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "demandIncrease",
    headerName: "Demand Increase",
    description: "This column has a value getter and is not sortable.",
    flex: 1.7,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return <ProgressBar value={params.value} />;
    },
  },
];

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="text"
      shape="circular"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
function DemandProductTable({ method }) {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await demandAxios.get(`products/`);
      const transformedData = res.data.map((product) => {
        const thisMonthSales = product.sales.find(
          (sale) => sale.year === "2023" && sale.month === "September"
        ); // Change "September" to the desired month if needed

        const lastMonthSales = product.sales.find(
          (sale) => sale.year === "2023" && sale.month === "August"
        ); // Change "August" to the desired previous month if needed

        var demand =
          ((thisMonthSales.count - lastMonthSales.count) /
            lastMonthSales.count) *
          100;

        var type = "";
        if (demand > 20) {
          type = "High"; // Use your custom color here
        }
        if (demand > 0 && demand < 20) {
          type = "Medium"; // Use your custom color here
        }
        if (demand < 0) {
          type = "Low"; // Use your custom color here
        }
        return {
          ...product,
          thisMonthSales: thisMonthSales ? thisMonthSales.count : 0,
          lastMonthSales: lastMonthSales ? lastMonthSales.count : 0,
          demandIncrease: (
            ((thisMonthSales.count - lastMonthSales.count) /
              lastMonthSales.count) *
            100
          ).toFixed(2),
          demandType: type,
        };
      });
      setProducts(transformedData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="demandProductTable h-screen mx-[20px] rounded-md  overflow-hidden"
      style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="mt-[90px] bg-white ">
        {/* <h1
          className="mt-2 ml-4 text-[35px] font-bold font-tinos"
          style={{ color: "#000" }}
        >
          Product Table
        </h1> */}
        <h2 className="font-tinos p-3 text-left text-xl pl-4">Product Table</h2>
        <div className="DemandTable p-3">
          <div
            style={{
              height: "75vh",
              width: "100%",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <DataGrid
                rows={products}
                columns={columns}
                rowHeight={70}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                getRowId={(row) => row._id}
                onRowClick={(row) => {
                  console.log(row);
                  method(row.row._id);
                }}
                slots={{
                  toolbar: GridToolbar,
                  pagination: CustomPagination,
                }}
                pageSizeOptions={[10]}
                showColumnVerticalBorder={true}
                showCellVerticalBorder={true}
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#000",
                    color: "#fff",
                    fontFamily: "Tinos",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "#fff",
                    color: "#2B2B2B",
                    fontFamily: "Tinos",
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    backgroundColor: "#fff",
                  },
                  "& .MuiDataGrid-toolbarContainer": {
                    "& .MuiButton-text": {
                      color: "#636363",
                      marginLeft: "30px",
                    },
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandProductTable;
