import { FaPlus } from "react-icons/fa";
import Line from "../components/Line";
import myGif1 from "../image/poert1.png";
import myGif2 from "../image/port2.png";
import myGif3 from "../image/port3.png";

function Portfolio() {
  function handleCard(id) {
    document.getElementById(id).style.display = "flex";
  }
  function clickOutside(id) {
    document.getElementById(id).style.display = "none";
  }
  return (
    <>
      <main className="portfolio" style={{ marginTop: "100px" }}>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "25px",
              color: "#555",
              fontSize: "2.25rem",
              fontWeight: "bold",
            }}
          >
            {"portfolio".toUpperCase()}
          </h1>
          <Line bg="#000" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "300px" }}>
              <div className="card" style={{ position: "relative" }}>
                <img src={myGif1} alt="gif1" />
                <div
                  className="img-overlay"
                  id="card1"
                  onClick={() => clickOutside("card1")}
                >
                  <img src={myGif1} alt="gif1" />
                </div>
                <div className="overlay" onClick={() => handleCard("card1")}>
                  <FaPlus />
                </div>
              </div>
              <div className="card" style={{ position: "relative" }}>
                <img src={myGif1} alt="gif1" />
                <div
                  className="img-overlay"
                  id="card2"
                  onClick={() => clickOutside("card2")}
                >
                  <img src={myGif1} alt="gif1" />
                </div>
                <div className="overlay" onClick={() => handleCard("card2")}>
                  <FaPlus />
                </div>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div className="card" style={{ position: "relative" }}>
                <img src={myGif2} alt="gif2" />
                <div
                  className="img-overlay"
                  id="card3"
                  onClick={() => clickOutside("card3")}
                >
                  <img src={myGif2} alt="gif1" />
                </div>
                <div className="overlay" onClick={() => handleCard("card3")}>
                  <FaPlus />
                </div>
              </div>
              <div className="card" style={{ position: "relative" }}>
                <img src={myGif2} alt="gif2" />
                <div
                  className="img-overlay"
                  id="card4"
                  onClick={() => clickOutside("card4")}
                >
                  <img src={myGif2} alt="gif1" />
                </div>
                <div className="overlay" onClick={() => handleCard("card4")}>
                  <FaPlus />
                </div>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div className="card" style={{ position: "relative" }}>
                <img src={myGif3} alt="gif3" />
                <div
                  className="img-overlay"
                  id="card5"
                  onClick={() => clickOutside("card5")}
                >
                  <img src={myGif3} alt="gif1" />
                </div>
                <div className="overlay" onClick={() => handleCard("card5")}>
                  <FaPlus />
                </div>
              </div>
              <div className="card" style={{ position: "relative" }}>
                <img src={myGif3} alt="gif3" />
                <div
                  className="img-overlay"
                  id="card6"
                  onClick={() => clickOutside("card6")}
                >
                  <img src={myGif3} alt="gif1" />
                </div>
                <div className="overlay" onClick={() => handleCard("card6")}>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
