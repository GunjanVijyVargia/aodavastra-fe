import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MasterComponent from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import EmptyBag from "./Components/EmptyBag";

const font = "'Poppins', sans-serif";

function App() {
  const theme = createTheme({
    input: {
      "&::placeholder": {
        opacity: 1,
      },
    },
    palette: {
      primary: {
        main: "#A484BD",
      },

      secondary: {
        main: "#A484BD",
      },
    },
    typography: {
      fontFamily: font,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GoogleOAuthProvider clientId="<your_client_id>">
            <MasterComponent />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
