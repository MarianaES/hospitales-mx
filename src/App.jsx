import { render } from "react-dom";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Hospital from "./components/Hospital";
import NavBar from "./components/NavBar";
import SearchParams from "./components/SearchParams";
import theme from "./GlobalStyles";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Grid
          container
          direction="row"
          justifyContent="center"
          margin="4rem"
          spacing={8}
        >
          <Grid item xs={4}>
            <SearchParams />
          </Grid>
          <Grid item xs={8}>
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
          </Grid>
        </Grid>
      </ThemeProvider>
    </CssBaseline>
  );
}

render(<App />, document.getElementById("root"));
