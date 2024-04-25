import { Box, Grid, Paper } from "@mui/material";
import splashImg from "../assets/splash-01.jpg";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <img src={splashImg} alt="description" />
      <div>
        <h2>TransE-App v.2024</h2>
      </div>
    </Box>
  );
};
