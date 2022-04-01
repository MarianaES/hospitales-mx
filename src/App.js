import React from "react";
import { render } from "react-dom";
import Hospital from "./Hospital";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Find a hospital!"),
    React.createElement(Hospital, {
      name: "DIF AGUASCALIENTES",
      state: "AGUASCALIENTES",
      municipality: "AGUASCALIENTES",
    }),
    React.createElement(Hospital, {
      name: "DIF COSÍO",
      state: "AGUASCALIENTES",
      municipality: "COSÍO",
    }),
    React.createElement(Hospital, {
      name: "DIF RINCÓN DE ROMOS",
      state: "AGUASCALIENTES",
      municipality: "RINCÓN DE ROMOS",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
