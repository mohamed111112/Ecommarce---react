import React from "react";
import Line from "../components/Line";

function About() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        backgroundColor: "#1abc9c",
        color: "#fff",
        padding: "3rem 0",
      }}
    >
      <div className="container">
        <h1 style={{ textAlign: "center" }}>
          {"about component".toUpperCase()}
        </h1>
        <Line />
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          <p style={{ width: "350px" }}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p style={{ width: "350px" }}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
