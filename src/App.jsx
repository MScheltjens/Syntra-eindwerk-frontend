import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./components/Home";
import "./App.css";

import Exercises from "./components/Exercises";
import Login from "./components/Login";
import Dog from "./components/Dog";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dogs/:dogId/*" element={<Dog />}>
              {" "}
            </Route>
            <Route path="exercises" element={<Exercises />} />
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
