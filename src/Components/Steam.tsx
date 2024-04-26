import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Box,
  Divider,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Link,
  Paper,
} from "@mui/material";
import { useState } from "react";

export const Steam = () => {
  const [temp, setTemp] = useState("0");
  const [error, setError] = useState(false);
  const [pres, setPres] = useState("0");
  const [steamState, setSteamState] = useState(0);

  // 處理溫度輸入值
  const handleTempChange = (e: any) => {
    const newValue = e.target.value;
    setTemp(newValue);
    // 驗證輸入值是否為正的浮點數
    const isPositiveFloat = /^([0-9]*[.])?[0-9]+$/;
    if (!isPositiveFloat.test(newValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  // 處理壓力輸入值
  const handlePresChange = (e: any) => {
    const newValue = e.target.value;
    setPres(newValue);
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
      {/* 輸入條件 */}
      <Grid item xs={4} sx={{ ml: 4, mt: 1, pt: 10 }}>
        <Card sx={{ maxWidth: 550 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Steam Property Calculator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the program implementation of the high-speed IAPWS-IF97
              package seuif97. The IAPWS-IF97, known as the "IAPWS Industrial
              Formulation 1997 for the Thermodynamic Properties of Water and
              Steam".
            </Typography>
            <Box sx={{ mt: 2, fontSize: 12 }}>
              <Link
                href="http://www.iapws.org/relguide/IF97-Rev.html"
                target="_blank"
                rel="noopener"
              >
                IAPWS-IF97?
              </Link>
            </Box>
            <Box marginTop={1}>
              <Divider variant="fullWidth" />
            </Box>
            <Box
              component="form"
              display="flex"
              marginTop={2}
              flexDirection="column"
              sx={{
                "& .MuiTextField-root": { mt: 2, width: "50ch" },
              }}
            >
              <FormControl sx={{ mt: 2 }}>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  id="state-select"
                  value={steamState}
                  label="State"
                  onChange={(e) => {
                    setSteamState(e.target.value as number);
                    switch (e.target.value) {
                      case 10:
                        setTemp("0");
                        setPres("0");
                        break;
                      case 20:
                        setTemp("0");
                        break;
                      case 30:
                        setPres("0");
                        break;
                      case 40:
                        setTemp("0");
                        setPres("0");
                        break;
                      default:
                        break;
                    }
                  }}
                  sx={{ width: "45ch" }}
                >
                  <MenuItem value={0}>-- Select a State --</MenuItem>
                  <MenuItem value={10}>Saturated Steam -- T</MenuItem>
                  <MenuItem value={20}>Saturated Steam -- P</MenuItem>
                  <MenuItem value={30}>Superheated steam</MenuItem>
                  <MenuItem value={40}>Water</MenuItem>
                </Select>
              </FormControl>
              {steamState === 20 || steamState === 0 ? undefined : (
                <TextField
                  id="outlined-basic"
                  label="Temperature (°C)"
                  variant="outlined"
                  value={temp}
                  error={error}
                  helperText={error ? "Please innput correct number" : ""}
                  onChange={handleTempChange}
                />
              )}
              {steamState === 10 || steamState === 0 ? undefined : (
                <TextField
                  id="outlined-basic"
                  label="Pressure (MPa)"
                  variant="outlined"
                  value={pres}
                  error={error}
                  helperText={error ? "Please innput correct number" : ""}
                  onChange={handlePresChange}
                />
              )}
            </Box>
          </CardContent>
          <CardActions sx={{ ml: 1, mt: 4, mb: 1 }}>
            <Button size="medium">Calculate</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* 輸出結果 */}
      <Grid item xs={6} sx={{ ml: 4, mt: 1, pt: 10 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Calculated Property
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
