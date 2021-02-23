import React from "react";
import { Button } from "@material-ui/core";

const Accessories = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/accessories/camera")}>camera</Button>
      <Button onClick={() => history.push("/accessories/refrigerator")}>refrigerator</Button>
      <Button onClick={() => history.push("/accessories/tv")}>tv</Button>
    </>
  ); 
};

export default Accessories;