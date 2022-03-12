import React from "react";
import { TuRoutes } from "./routes/tu-routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TuRoutes />
    </ThemeProvider>
  );
}

export { App };
