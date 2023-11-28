import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#363c60",
      light: "#5E637F",
      dark: "#252A43",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#29B6F6",
      light: "#53C4F7",
      dark: "#1C7FAC",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
});

export default theme;
