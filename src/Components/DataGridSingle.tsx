import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Stack, Typography } from "@mui/material";
import BlurLinearOutlinedIcon from "@mui/icons-material/BlurLinearOutlined";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "Norm. ID\n(in)", width: 110, resizable: false },
  {
    field: "actID",
    headerName: "Act. ID (in)",
    width: 110,
    editable: false,
    resizable: false,
  },
  {
    field: "vel",
    headerName: "Velocity (m/s)",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "presDrop",
    headerName: "Pres. Drop (kg/cm^2/100m)",
    width: 200,
    resizable: false,
    editable: false,
  },
  {
    field: "vh",
    headerName: "1.0 V.H (kg/m/s^2)",
    width: 140,
    resizable: false,
    editable: false,
  },
  {
    field: "reynoldNo",
    headerName: "Reynold No. [-]",
    width: 140,
    resizable: false,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    actID: 1.1,
    vel: 100,
    presDrop: 0.1,
    vh: 1,
    reynoldNo: 100000,
  },
  {
    id: 2,
    actID: 2.1,
    vel: 200,
    presDrop: 0.2,
    vh: 2,
    reynoldNo: 200000,
  },
  {
    id: 3,
    actID: 3.1,
    vel: 300,
    presDrop: 0.3,
    vh: 3,
    reynoldNo: 300000,
  },
  {
    id: 4,
    actID: 4.1,
    vel: 400,
    presDrop: 0.4,
    vh: 4,
    reynoldNo: 400000,
  },
  {
    id: 5,
    actID: 5.1,
    vel: 500,
    presDrop: 0.5,
    vh: 5,
    reynoldNo: 500000,
  },
  {
    id: 6,
    actID: 6.1,
    vel: 600,
    presDrop: 0.6,
    vh: 6,
    reynoldNo: 600000,
  },
  {
    id: 7,
    actID: 7.1,
    vel: 700,
    presDrop: 0.7,
    vh: 7,
    reynoldNo: 700000,
  },
  {
    id: 8,
    actID: 8.1,
    vel: 800,
    presDrop: 0.8,
    vh: 8,
    reynoldNo: 800000,
  },
  {
    id: 9,
    actID: 9.1,
    vel: 900,
    presDrop: 0.9,
    vh: 9,
    reynoldNo: 900000,
  },
];

export default function DataGridSingle() {
  return (
    <Box sx={{ width: "875px" }}>
      <Stack display={"flex"} justifyContent={"flex-end"}>
        <span>
          <Typography gutterBottom variant="h6" component="span">
            Single Phase Line Sizing
          </Typography>
          <Box sx={{ float: "right" }}>
            <Button
              variant="contained"
              startIcon={<BlurLinearOutlinedIcon />}
              size="small"
              color="success"
            >
              Filter
            </Button>
            <Button
              variant="contained"
              startIcon={<RotateLeftIcon />}
              size="small"
              color="success"
              sx={{ ml: 2 }}
            >
              {" "}
              Reset
            </Button>
          </Box>
        </span>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            color: "primary.main",
            fontWeight: "bold",
          },
          mt: 2,
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 6, 7, 8, 9, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
