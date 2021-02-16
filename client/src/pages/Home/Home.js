import React, { useEffect } from "react";
// import Hero from "../../components/Hero";
// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components//Col";
import Btn from "../../components/Btn/index";
import "./style.css";
import API from "../../utils/API";

function Home() {
  useEffect(() => {
    API.getAccess();
  }, []);

  return (
    <div>
      <div className="img">
        <Btn />
      </div>
    </div>
  );
}

export default Home;
