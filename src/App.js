import { render } from "react-dom";
import Hospital from "./Hospital";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStaffAesculapius } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faStaffAesculapius} />
      <h1>Find a hospital!</h1>
      <Hospital
        name="DIF AGUASCALIENTES"
        state="AGUASCALIENTES"
        municipality="AGUASCALIENTES"
      />
      <Hospital name="DIF COSÍO" state="AGUASCALIENTES" municipality="COSÍO" />
      <Hospital
        name="DIF RINCÓN DE ROMOS"
        state="AGUASCALIENTES"
        municipality="RINCÓN DE ROMOS"
      />
    </div>
  );
}

render(<App />, document.getElementById("root"));
