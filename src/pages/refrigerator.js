import React from "react";
import { Button } from "@material-ui/core";

const Refrigerator = props => {
  const { history } = props;
  return <div>
    <h1>Collection of Refrigerators!</h1>
    <Button onClick={() => history.push("/accessories/refrigerator/one")}>onedoor</Button>
    <Button onClick={() => history.push("/accessories/refrigerator/two")}>twodoor</Button>
    </div>;
};

export default Refrigerator;
