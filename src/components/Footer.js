import {
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundColor: "#2c3e50",
          height: "auto",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignOtems: "center",
            justifyContent: "space-around",
            height: "100%",
            padding: "4rem 0",
            textAlign: "center",
            flexWrap: "wrap",
            rowGap:  "70px"
          }}
        >
          <div style={{ lineHeight: "1.7" }}>
            <h2 style={{ textTransform: "uppercase" }}>Location</h2>
            <p>
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          <div style={{ lineHeight: "1.7" }}>
            <h2 style={{ textTransform: "uppercase" }}>around the web</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <FaFacebook
                style={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  padding: "7px",
                }}
              />
              <FaTwitter
                style={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  padding: "7px",
                }}
              />
              <FaLinkedin
                style={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  padding: "7px",
                }}
              />
              <FaGlobe
                style={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  padding: "7px",
                }}
              />
            </div>
          </div>
          <div style={{ lineHeight: "1.7" }}>
            <h2 style={{ textTransform: "uppercase" }}>about freelancer</h2>
            <p>
              Freelance is a free to use, licensed
              <br />
              Bootstrap theme created by Route
            </p>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#1a252f",
          }}
        >
          Copyright © {new Date().getFullYear()} -{" "}
          <span>All right reserved by Start Framework</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
