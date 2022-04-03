import { Box } from "@mui/material";

function Hospital(props) {
  return (
    <Box>
      <h1>{props.name}</h1>
      <h2>{props.state}</h2>
      <h2>{props.municipality}</h2>
    </Box>
  );
}

export default Hospital;
