import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Box from "@mui/material/Box";
import { Paper, ThemeProvider } from "@mui/material";
import { theme } from "./theme/components";
import backImage from "./back.jpg";
import { Auth, Connection, Info, Main, Panel, Predict, PredictImage, Users } from "./pages";
import { Footer } from "./components/Footer";
import { User } from "./pages/User/User";
import { Roles } from "./pages/Auth/Auth";

function App() {
  // const role = useRole();
  const [logout, setLogout] = useState(false);
  const [role, setRole] = useState<Roles>();


  useEffect(() => {
    const role = localStorage.getItem("role");
    setRole(role as Roles);
  }, []);

  const submitForm = (role: Roles) => {
    setRole(role);
  };

  const currentRole = useMemo(() => {
    if (logout) {
      return undefined;
    } else {
      return role;
    }
  }, [role, logout]);

  const logoutFunction = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    setLogout(true);    
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ backgroundImage: `url(${backImage})` }}>
        <Box
          sx={{
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            overflowX: "hidden",
          }}
        >
          <Navbar logoutFunction={logoutFunction} role={currentRole}/>
          <Box
            sx={{
              // minHeight: '80vh',
              // height: '80vh',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: '200px'
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/feedback" element={<Connection />} />
                <Route path="/auth" element={<Auth onSubmit={submitForm}/>} />
                <Route path="/users" element={<Users />} />
                <Route path="/predict" element={<PredictImage />} />
                <Route path="/panel" element={<Panel />} />
                <Route path="/dashboard" element={<User />} />
                <Route path="/prediction" element={<Predict />} />
                <Route path="/info" element={<Info />} />
              </Routes>
            </BrowserRouter>
          </Box>
          <Footer />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
