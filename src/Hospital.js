import React from "react";

const Hospital = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.state),
    React.createElement("h2", {}, props.municipality),
  ]);
};

export default Hospital;
