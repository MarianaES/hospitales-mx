import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

function SearchParams() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box display="flex" flexDirection="row">
          <ManageSearchIcon color="secondary" fontSize="large" />
          <Typography variant="h4" component="div" color="secondary">
            Buscar hospitales
          </Typography>
        </Box>
        <TextField
          id="standard-basic"
          label="Entidad"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="standard-basic"
          label="Municipio"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="standard-basic"
          label="Localidad"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="standard-basic"
          label="Clave de la institución"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="secondary" fullWidth>
          Buscar
        </Button>
      </CardActions>
    </Card>
  );
}

export default SearchParams;
