import React from 'react'
import { FaStar } from 'react-icons/fa';

function Line({bg}) {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        className="line"
        style={{
          backgroundColor: bg || "white",
          height: "4px",
          width: "110px",
        }}
      ></div>
      <FaStar style={{ fontSize: "1.4rem" }} />
      <div
        className="line"
        style={{
          backgroundColor: bg || "white",
          height: "4px",
          width: "110px",
        }}
      ></div>
    </div>
  );
}

export default Line