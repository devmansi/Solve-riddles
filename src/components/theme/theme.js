import React from "react";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import "./theme.css";

function Theme({ darkmode, setDarkMode }) {
  return (
    <div className="toggle" onClick={() => setDarkMode(!darkmode)}>
      {darkmode ? (
        <>
          <span>Light</span>
          <MdOutlineLightMode />
        </>
      ) : (
        <>
          <span>Dark</span>
          <MdNightlightRound />
        </>
      )}
    </div>
  );
}

export default Theme;
