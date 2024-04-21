import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import DrawerAppBar from "./Components/DrawerAppBar";
import "./App.css";

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
    </div>
  );
}

export default App;
