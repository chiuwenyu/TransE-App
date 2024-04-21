import { Grid, Paper } from "@mui/material";

export const Home = () => {
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
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <h1>Hello World</h1>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <h1>Home Page</h1>
      </Grid>
    </Grid>
  );
};
