import React from "react";
import Navbar from "./Navbar"; // <== Add this line

const Layout = ({ children }) => {
  return (
    <div
      style={{
        //backgroundImage: "url('/math.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Add Navbar here */}
      <Navbar />

      {/* Overlay + content */}
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#90cdf4",
        fontSize: "1.25rem",
        minHeight: "100vh",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

