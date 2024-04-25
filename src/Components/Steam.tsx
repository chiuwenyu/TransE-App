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
} from "@mui/material";

export const Steam = () => {
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
                  value={10}
                  label="State"
                  onChange={() => {
                    console.log("channged");
                  }}
                  sx={{ width: "45ch" }}
                >
                  <MenuItem value={10}>Saturated Steam -- T</MenuItem>
                  <MenuItem value={20}>Saturated Steam -- P</MenuItem>
                  <MenuItem value={30}>Superheated steam</MenuItem>
                  <MenuItem value={40}>Water</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Temperature (°C)"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Pressure (kPa)"
                variant="outlined"
              />
            </Box>
          </CardContent>
          <CardActions sx={{ ml: 1, mt: 4, mb: 1 }}>
            <Button size="medium">Calculate</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
