import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ED1C29",
    },
    secondary: {
      main: "#ED1C29",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#fff",
      default: "#ED1C29",
      contrast: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
  }
});
