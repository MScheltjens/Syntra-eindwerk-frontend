import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import Exercises from "./components/exerciseComponents/Exercises";
import Login from "./components/login/Login";
import Dog from "./components/DogComponents/Dog";
import Dashboard from "./components/dashboard/Dashboard";
import MainLayout from "./components/Layouts/MainLayout";
import RouteNotFound from "./components/404/RouteNotFound";
import HealthFood from "./components/HealthFood";
import PrivateRoutes from "./Routes/PrivateRoutes";
import "./App.css";
import MobileAppExample from "./components/MobileAppExample";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="dashboard/*" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dogs/:dogId/*" element={<Dog />}>
                {" "}
              </Route>
              <Route path="exercises/*" element={<Exercises />}>
                <Route index element={<Exercises />} />
              </Route>
              <Route path="healthAndFood/*" element={<HealthFood />}>
                <Route index element={<HealthFood />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route exact path="mobileAppExample" element={<MobileAppExample />} />

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
