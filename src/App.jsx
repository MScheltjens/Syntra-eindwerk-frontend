import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./components/Home";
import "./App.css";

import Exercises from "./components/Exercises";
import Login from "./components/Login";
import Dog from "./components/Dog";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";
import RouteNotFound from "./components/RouteNotFound";
import DogBarChart from "./components/DogBarChart";
import PrivateRoutes from "./Routes/PrivateRoutes";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="dashboard/*" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dogs/:dogId/*" element={<Dog />}>
                {" "}
              </Route>
              <Route path="exercises" element={<Exercises />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <MainLayout>
              <RouteNotFound />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
