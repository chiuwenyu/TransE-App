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
