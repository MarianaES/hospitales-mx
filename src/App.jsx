import { render } from "react-dom";
import Hospital from "./Hospital";
import { Box, Container, CssBaseline } from "@mui/material";
import SearchAppBar from "./components/SearchBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./GlobalStyles";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Container>
          <Hospital
            name="DIF AGUASCALIENTES"
            state="AGUASCALIENTES"
            municipality="AGUASCALIENTES"
          />
          <Hospital
            name="DIF COSÍO"
            state="AGUASCALIENTES"
            municipality="COSÍO"
          />
          <Hospital
            name="DIF RINCÓN DE ROMOS"
            state="AGUASCALIENTES"
            municipality="RINCÓN DE ROMOS"
          />
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
}

render(<App />, document.getElementById("root"));
