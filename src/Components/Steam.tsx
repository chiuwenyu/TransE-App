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
  Menu,
} from "@mui/material";
import { useState } from "react";

export const Steam = () => {
  const [temp, setTemp] = useState("0");
  const [pres, setPres] = useState("0");
  const [steamState, setSteamState] = useState(0);

  return (
    <Grid
      container
      // alignItems="center"
      sx={{
        bgcolor: "background.default",
        ml: 4,
        mt: 1,
        pt: 10,
        fontSize: "10px",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={6}>
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
                    console.log(e.target.value);
                    setSteamState(e.target.value as number);
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
                  onChange={(e) => setTemp(e.target.value)}
                />
              )}
              {steamState === 10 || steamState === 0 ? undefined : (
                <TextField
                  id="outlined-basic"
                  label="Pressure (kPa)"
                  variant="outlined"
                  value={pres}
                  onChange={(e) => setPres(e.target.value)}
                />
              )}
            </Box>
          </CardContent>
          <CardActions sx={{ ml: 1, mt: 4, mb: 1 }}>
            <Button size="medium">Calculate</Button>
            <Button size="medium">IAPWS-IF97</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
