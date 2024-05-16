// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod use_seuif97;
use crate::use_seuif97::steam_props_cal::*;

#[tauri::command]
fn invoke_seuif(pressure: f64, temperature: f64, mode: u32) -> SteamProps {
    call_seuif(pressure, temperature, mode)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![invoke_seuif])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
