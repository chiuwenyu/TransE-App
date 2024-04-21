import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import DrawerAppBar from "./Components/DrawerAppBar";
import "./App.css";
import { Box, Toolbar } from "@mui/material";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1>Hello World</h1>
      </Box>
    </div>
  );
}

export default App;
