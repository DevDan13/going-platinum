import React, { useEffect } from "react";
// import Hero from "../../components/Hero";
// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components//Col";
import Btn from "../../components/Btn/index";
import "./style.css";
import API from "../../utils/API";

function Home() {
  //testing feature
  const testBtn = () => {
    API.getAuthentication().then((res) => {
      window.location.replace(res.data);
    });
  };
  useEffect(() => {
    const code = window.location.href.split("=");
    if (code[1]) {
      console.log("code=", code[1]);
      API.getTokens(code[1]);
    }
  }, []);
  //testing feature ends here

  return (
    <div>
      <div className="img">
        <button onClick={testBtn}>Test</button>
        <Btn />
      </div>
    </div>
  );
}

export default Home;
