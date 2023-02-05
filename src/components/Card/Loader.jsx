import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Loader() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress color="inherit" />
    </Box>
  );
}

export default Loader;
