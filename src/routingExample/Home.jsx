import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={`about`}>
        <Button variant="contained" disabled={false} color={"warning"}>
        to about pag
        </Button>
      </Link>
      <br />
      {/* <Link to={`about`}>to about page</Link> <br /> */}
      <Link to={`/contact`}>to contact page</Link>
    </>
  );
};

export default Home;
