import React from "react";
import { Button } from "@material-ui/core";

const Home = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/about")}>ABOUT</Button>
      <Button onClick={() => history.push("/accessories")}>ACCESORIES</Button>
    </>
  );
};

export default Home;