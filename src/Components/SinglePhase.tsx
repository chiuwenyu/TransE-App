import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";

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
  const [massFlowRate, setMassFlowRate] = useState("0");
  const [error, setError] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMassFlowRateChange = (e: any) => {
    const newValue = e.target.value;
    setMassFlowRate(newValue);
    // 驗證輸入值是否為正的浮點數
    const isPositiveFloat = /^([0-9]*[.])?[0-9]+$/;
    if (!isPositiveFloat.test(newValue)) {
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
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <TextField
              id="outlined-basic"
              label="Mass Flow Rate (Kg/hr)"
              variant="outlined"
              value={massFlowRate}
              error={error}
              helperText={error ? "Please input correct number" : ""}
              onChange={handleMassFlowRateChange}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};
