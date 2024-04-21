import { Grid } from "@mui/material";

export const Steam = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "background.default",
        pt: 10,
        fontSize: "10px",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1>Steam Property Evaluation</h1>
      </Grid>
    </Grid>
  );
};
