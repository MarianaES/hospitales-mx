
const Hospital = (props) => {
  return (
    React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.state),
      React.createElement("h2", {}, props.municipality)
    ])
  )
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Find a hospital!"),
    React.createElement(Hospital, { name: "DIF AGUASCALIENTES", state: "AGUASCALIENTES", municipality: "AGUASCALIENTES"}),
    React.createElement(Hospital, {name: "DIF COSÍO", state: "AGUASCALIENTES",municipality: "COSÍO" }),
    React.createElement(Hospital, {name: "DIF RINCÓN DE ROMOS", state: "AGUASCALIENTES", municipality: "RINCÓN DE ROMOS"}),
  ) 
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))