import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import OnlyNotlogin from "./auth/OnlyNotLogin";
import OnlyLogin from "./auth/OnlyLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OnlyNotlogin>
              <Login />
            </OnlyNotlogin>
          }
        />
        <Route
          path="/dashboard"
          element={
            <OnlyLogin>
              <Dashboard />
            </OnlyLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
