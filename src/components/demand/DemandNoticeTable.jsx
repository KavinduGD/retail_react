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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import demandAxios from "../../pages/demand/BaseURL";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import PdfChart from "./pdf/PdfChart";

function getCurrentDate(separator = " / ") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
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
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

//
//
//Component beginning
//
//
function DemandNoticeTable({ demandMethod, notice, all }) {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);

  const [demandNotices, setDemandNotices] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [pdfRow, setPdfRow] = useState(null);
  const [allProducts, setAllPRoducts] = useState([]);

  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  useEffect(() => {
    fetchData();
  }, [notice]);

  const fetchData = async () => {
    try {
      const response = await demandAxios.get("demand/demandNotice");
      setDemandNotices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductImage = (productId) => {
    const product = all.find((item) => item.productId === productId);
    return product ? product.imageUrl : ""; // Replace 'image' with the actual property name containing the image URL in your product object
  };
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
      field: "name",
      headerName: "Item",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Type",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      description: "This column has a value getter and is not sortable.",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "justification",
      headerName: "Justification",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "Date",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
      valueFormatter: (params) => formatDate(params.value), // Format the date here
    },

    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <IconButton onClick={() => handleEditDemandNotice(params.row)}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <IconButton onClick={() => handleDeleteDemandNotice(params.row._id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      field: "pdf",
      headerName: "Pdf",
      sortable: false,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            setPdfRow(params.row);
          }}
        >
          <PictureAsPdfIcon />
        </IconButton>
      ),
    },
  ];

  const handleEditDemandNotice = (row) => {
    setSelectedRow(row);
    console.log(row);
    setIsEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setIsEditDialogOpen(false);
  };
  const handleSaveChanges = async (updatedRow) => {
    if (selectedRow) {
      try {
        const response = await demandAxios.put(
          `demand/demandnotice/${selectedRow._id}`,
          updatedRow
        );

        if (response.status === 200) {
          const updatedDemandNotices = demandNotices.map((row) =>
            row._id === selectedRow._id ? { ...row, ...updatedRow } : row
          );
          setDemandNotices(updatedDemandNotices);

          setIsEditDialogOpen(false);
          setSelectedRow(null);
        } else {
          console.error("Failed to update data.");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleDeleteDemandNotice = async (id) => {
    try {
      const response = await demandAxios.delete(`demand/demandnotice/${id}`);

      if (response.status === 200) {
        const updatedDemandNotices = demandNotices.filter(
          (row) => row._id !== id
        );
        setDemandNotices(updatedDemandNotices);
      } else {
        console.error("Failed to delete data.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  return (
    <div className="demandProductTable  mx-[20px] rounded-md  overflow-hidden">
      <div className="mt-[90px] bg-white ">
        <h2 className="font-tinos p-3 text-left text-xl pl-4">
          Demand Notice Table
        </h2>

        <div className="DemandTable p-3">
          <div
            style={{
              height: "75vh",
              width: "100%",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <DataGrid
                rows={demandNotices}
                columns={columns} // Define your columns here
                rowHeight={70}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                getRowId={(row) => row._id}
                slots={{
                  toolbar: GridToolbar,
                  pagination: CustomPagination,
                }}
                pageSizeOptions={[5]}
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
      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <form>
            {columns
              .filter(
                (column) =>
                  column.field !== "edit" &&
                  column.field !== "delete" &&
                  column.field !== "pdf" &&
                  column.field !== "createdAt"
              )
              .map((column) => (
                <TextField
                  key={column.field}
                  label={column.headerName}
                  value={selectedRow ? selectedRow[column.field] : ""}
                  onChange={(e) =>
                    setSelectedRow({
                      ...selectedRow,
                      [column.field]: e.target.value,
                    })
                  }
                  fullWidth
                  margin="normal"
                  disabled={
                    column.field === "productId" || column.field === "name"
                  } // Add this line to disable the fields
                />
              ))}
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleSaveChanges(selectedRow)}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <>
        <div>
          <div className="example-config"></div>
          <div className="w-full flex flex-col  ">
            <div className="flex justify-end">
              <button
                className="my-6 px-[40px] py-4 text-white rounded-md  place-items-end"
                style={{ background: "#04062C" }}
                onClick={exportPDFWithMethod}
                disabled={!pdfRow}
              >
                Download PDF
              </button>
            </div>
            <PDFExport
              ref={pdfExportComponent}
              paperSize="auto"
              //margin={40}
              fileName={`Report for ${new Date().getFullYear()}`}
              author="KendoReact Team"
            >
              <div
                ref={container}
                style={{
                  width: "100%",
                }}
              >
                <div className="demandProductTable  rounded-md  overflow-hidden bg-white ">
                  <div className="border-solid border-2 border-black h-full m-14">
                    <div className="flex justify-center w-full mt-[20px] border-b-2 border-black pb-[20px]">
                      <div className="flex justify-between items-center  w-full pr-[190px] pl-[50px]">
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
                    <div className="flex w-full justify-between items-start">
                      <div
                        className="details w-full flex flex-col gap-5 pl-14 pt-[70px]"
                        style={{ fontFamily: "tinos" }}
                      >
                        <div className="flex justify-between ">
                          <div className="flex gap-[106px] text-2xl font-semibold">
                            <p>ProductId</p>
                            <p>-</p>
                          </div>

                          <p className="text-2xl font-mesemibold">
                            {pdfRow
                              ? pdfRow.productId
                              : "---- Select a product ----"}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex  text-2xl font-semibold gap-[67px]">
                            <p>ProductName</p> <p>-</p>
                          </div>
                          <p className="text-2xl font-medium">
                            {pdfRow
                              ? pdfRow.name
                              : "---- Select a product ----"}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-[64px] text-2xl font-semibold">
                            <p>Demand Type</p> <p>-</p>
                          </div>
                          <p className="text-2xl font-medium">
                            {pdfRow
                              ? pdfRow.type
                              : "---- Select a product ----"}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-[119px] text-2xl font-semibold">
                            <p>Amount</p> <p>-</p>
                          </div>
                          <p className="text-2xl font-medium">
                            {pdfRow
                              ? pdfRow.amount
                              : "---- Select a product ----"}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-[151px] text-2xl font-semibold">
                            <p>Date</p> <p>-</p>
                          </div>
                          <p className="text-2xl font-medium">
                            {pdfRow
                              ? formatDate(pdfRow.createdAt)
                              : "---- Select a product ----"}
                          </p>
                        </div>
                        <p className="text-2xl font-medium text-justify">
                          {pdfRow
                            ? pdfRow.justification
                            : "---- Select a product ----"}
                        </p>
                      </div>
                      <div className=" w-full flex  justify-center">
                        <img
                          src={getProductImage(pdfRow ? pdfRow.productId : "")}
                          alt=""
                          className="w-[400px] "
                        />
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <h1 className="text-3xl font-tinos font-bold text-center">
                        Analysis Chart
                      </h1>
                    </div>
                    <div className="px-10">
                      {pdfRow ? (
                        <PdfChart productId={pdfRow.productId} />
                      ) : (
                        <p className="text-3xl font-tinos font-bold text-center mt-[100px] mb-[100px]">
                          --------------- Select a Product --------------
                        </p>
                      )}
                    </div>
                    <div className="signDate flex justify-between items-end px-[100px] mb-[100px] mt-[50px]">
                      <div className="Ddate font-tinos flex flex-col items-center">
                        <p className="font-semibold text-xl">
                          {getCurrentDate()}
                        </p>
                        <div className="h-[2px] w-[150px] bg-black" />
                        <p className="font-bold text-2xl">Date</p>
                      </div>
                      <div className="sign flex flex-col items-center">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1695917032/4152-removebg-preview_kwedsy.png"
                            alt=""
                            className="w-[150px]"
                          />
                        </div>
                        <div className="h-[2px] w-[150px] bg-black" />
                        <p className="font-tinos  font-bold text-2xl">
                          Signature
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PDFExport>
          </div>
        </div>
      </>
    </div>
  );
}
export default DemandNoticeTable;
