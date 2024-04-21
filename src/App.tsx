import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Box, Grid } from "@mui/material";
import { Header } from "./Components/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { SinglePhase } from "./Components/SinglePhase";
import { Steam } from "./Components/Steam";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <Header />
      <Grid
        container
        justifyContent="center"
        sx={{
          bgcolor: "background.default",
          pl: 0,
          pt: 10,
          fontSize: "10px",
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <Grid>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/steam" element={<Steam />} />
              <Route path="/singlephase" element={<SinglePhase />} />
            </Routes>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
