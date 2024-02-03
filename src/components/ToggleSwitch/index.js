import React from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sun icon

export default function ToggleSwitch({ darkMode, toggleDarkMode }) {
  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {darkMode ? <Brightness4Icon /> : <WbSunnyIcon />}
      <Switch color="default" checked={darkMode} onChange={toggleDarkMode} />
    </IconButton>
  );
}
