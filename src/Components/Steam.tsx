import { invoke } from "@tauri-apps/api/tauri";

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

type Result = {
  d: number; // 2. Density, kg/m³
  v: number; // 3. Specific Volume, m³/kg
  h: number; // 4. Specific enthalpy, kJ/kg
  s: number; // 5. Specific entropy, kJ/(kg·K)
  u: number; // 7. Specific internal energy, kJ/kg
  x: number; // 15. steam quality, 0 <= x <= 1
  dv: number; // 24. Dynamic viscosity, Pa·s
  kv: number; // 25. Kinematic viscosity, m2/s
  k: number; // 26. Thermal conductivity, W/(m·K)
  td: number; // 27. Thermal diffusivity, m2/s
  st: number; // 29. Surface tension, N/m
  lat: number; // cal. property, Latent Heat
};

export const Steam = () => {
  async function rust_satTemp() {
    let res: Result = {
      d: -999.0,
      v: -999.0,
      h: -999.0,
      s: -999.0,
      u: -999.0,
      x: -999.0,
      dv: -999.0,
      kv: -999.0,
      k: -999.0,
      td: -999.0,
      st: -999.0,
      lat: -999.0,
    };

    await invoke<Result>("invoke_seuif", {
      pressure: parseFloat(pres),
      temperature: parseFloat(temp),
      mode: steamState,
    })
      .then((result) => {
        res = result as Result;
        // console.log(res.v);
        // console.log(res.h);
      })
      .catch((e) => {
        console.error(e);
      });
  }

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
                  <MenuItem value={10}>Saturated Steam by T</MenuItem>
                  <MenuItem value={20}>Saturated Steam by P</MenuItem>
                  <MenuItem value={30}>Saturated Water by T</MenuItem>
                  <MenuItem value={40}>Saturated Water by P</MenuItem>
                  <MenuItem value={50}>Superheated Steam by T, P</MenuItem>
                  <MenuItem value={60}>Subcool Water by T, P</MenuItem>
                </Select>
              </FormControl>
              {steamState === 20 ||
              steamState === 40 ||
              steamState === 0 ? undefined : (
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
              {steamState === 10 ||
              steamState === 30 ||
              steamState === 0 ? undefined : (
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
            <Button size="medium" onClick={rust_satTemp}>
              Calculate
            </Button>
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
