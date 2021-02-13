import Grid from "../../components/Grid/index";
import React, { useEffect } from "react";
import API from "../../utils/API";

function Home() {
  useEffect(() => {
    API.getAccessToken();
  }, []);

  return (
    <div>
      <Grid></Grid>
    </div>
  );
}

export default Home;
