import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PipeManager from "./PipeManager";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const SinglePhase = () => {
  // Process Data
  const [fluid, setFluid] = useState(10);
  const [massFlowRate, setMassFlowRate] = useState("");
  const [density, setDensity] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [roughness, setRoughness] = useState("");
  const [safeFactor, setSafeFactor] = useState("1.2");

  // Project Info
  const [projNo, setProjectNo] = useState("");
  const [projName, setProjectName] = useState("");
  const [projDesc, setProjectDesc] = useState("");

  // Line Tag
  const [lineNo, setLineNo] = useState("");
  const [lineFrom, setLineFrom] = useState("");
  const [lineTo, setLineTo] = useState("");
  const [note, setNote] = useState("");

  // Error handling
  const [error, setError] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  const validateInput = (value: any) => {
    // 驗證輸入值是否為正的浮點數
    const isPositiveFloat = /^([0-9]*[.])?[0-9]+$/;
    if (!isPositiveFloat.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <Grid
      container
      // alignItems="center"
      gap={6}
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={4} sx={{ ml: 4, mt: 1, pt: 10 }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              textColor="secondary"
              indicatorColor="secondary"
              onChange={handleChange}
              aria-label="basic tabs"
            >
              <Tab label="Process Data" {...a11yProps(0)} />
              <Tab label="Project Info" {...a11yProps(1)} />
              <Tab label="Line Tag" {...a11yProps(2)} />
              <Tab label="Pipe Sch." {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              sx={{
                "& .MuiTextField-root": { mt: 2, width: "30ch" },
              }}
            >
              <FormControl sx={{ mt: 2 }}>
                <InputLabel id="state-label">Fluid</InputLabel>
                <Select
                  labelId="state-label"
                  id="state-select"
                  value={fluid}
                  label="Fluid"
                  onChange={(e) => {
                    setFluid(e.target.value as number);
                  }}
                  sx={{ width: "20ch" }}
                >
                  <MenuItem value={10}>Liquid</MenuItem>
                  <MenuItem value={20}>Gas</MenuItem>
                  <MenuItem value={30}>Steam</MenuItem>
                  <MenuItem value={40}>Water</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Mass Flow Rate (Kg/hr)"
                variant="outlined"
                value={massFlowRate}
                color="secondary"
                error={error}
                helperText={error ? "Please input correct number" : ""}
                onChange={(e) => {
                  setMassFlowRate(e.target.value);
                  validateInput(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Density (Kg/m^3)"
                variant="outlined"
                value={density}
                color="secondary"
                error={error}
                helperText={error ? "Please input correct number" : ""}
                onChange={(e) => {
                  setDensity(e.target.value);
                  validateInput(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Viscosity (cP)"
                variant="outlined"
                value={viscosity}
                color="secondary"
                error={error}
                helperText={error ? "Please input correct number" : ""}
                onChange={(e) => {
                  setViscosity(e.target.value);
                  validateInput(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Pipe Roughness (mm)"
                variant="outlined"
                value={roughness}
                color="secondary"
                error={error}
                helperText={error ? "Please input correct number" : ""}
                onChange={(e) => {
                  setRoughness(e.target.value);
                  validateInput(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Safe Factor (-)"
                variant="outlined"
                defaultValue={1.2}
                value={safeFactor}
                color="secondary"
                error={error}
                helperText={error ? "Please input correct number" : ""}
                onChange={(e) => {
                  setSafeFactor(e.target.value);
                  validateInput(e.target.value);
                }}
              />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              sx={{
                "& .MuiTextField-root": { mt: 2, width: "45ch" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Project No."
                variant="outlined"
                value={projNo}
                color="secondary"
                onChange={(e) => {
                  setProjectNo(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Project Name"
                variant="outlined"
                value={projName}
                color="secondary"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Project Description"
                variant="outlined"
                value={projDesc}
                color="secondary"
                multiline
                rows={5}
                onChange={(e) => {
                  setProjectDesc(e.target.value);
                }}
              />
            </Box>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              sx={{
                "& .MuiTextField-root": { mt: 2, width: "45ch" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Line No."
                variant="outlined"
                value={lineNo}
                color="secondary"
                onChange={(e) => {
                  setLineNo(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Line From"
                variant="outlined"
                value={lineFrom}
                color="secondary"
                onChange={(e) => {
                  setLineFrom(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Line To"
                variant="outlined"
                value={lineTo}
                color="secondary"
                onChange={(e) => {
                  setLineTo(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Note"
                variant="outlined"
                value={note}
                color="secondary"
                multiline
                rows={5}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <PipeManager />
          </CustomTabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};
