import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NavBar>
              <Home />
            </NavBar>
          }
        />
        <Route
          path="/login"
          element={
            <NavBar>
              <Login />
            </NavBar>
          }
        />
        <Route
          path="/register"
          element={
            <NavBar>
              <Register />
            </NavBar>
          }
        />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
