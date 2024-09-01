import Line from "../components/Line";
import myImg from "../image/avataaars.svg";
import { FaStar } from "react-icons/fa";
function Home() {
  return (
    <>
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
        <div style={{ textAlign: "center" }}>
          <img src={myImg} width={"250px"} alt="profilePicture" />
          <h1>{"start framework".toUpperCase()}</h1>
          <Line />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </main>
    </>
  );
}

export default Home;
