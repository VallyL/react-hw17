import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f50057",
    },
    secondary: {
      main: "#1976d2",
    },
  },
});

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {theme.palette.mode === "light" ? "Light theme" : "Dark theme"}
        </Typography>
        <StyledButton onClick={toggleTheme}>Switch theme</StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
