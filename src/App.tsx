import "./App.css";
import { Grid } from "@mui/material";
import { Header } from "./Components/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { SinglePhase } from "./Components/SinglePhase";
import { Steam } from "./Components/Steam";

function App() {
  return (
    <>
      <Header />
      <Grid>
        <Grid item>
          <Routes>
            <Route path="/" element={<Steam />} />
            <Route path="/steam" element={<Steam />} />
            <Route path="/singlephase" element={<SinglePhase />} />
          </Routes>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
