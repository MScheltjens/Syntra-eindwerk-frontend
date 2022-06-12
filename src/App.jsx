import { Routes, Route, Link } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Add from "./components/Add";
import Home from "./components/Home";
import "./App.css";

import DogExercise from "./components/DogExercise";
import Exercises from "./components/Exercises";
import Exercise from "./components/Exercise";
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
            <Route path="add" element={<Add />} />
            <Route path="dogs/:dogId/*" element={<Dog />}>
              {" "}
              {/* <Route index element={<Dog />} /> */}
            </Route>
            <Route path="exercises" element={<Exercises />}>
              <Route path="dog_exes/:dogExId">
                <Route index element={<DogExercise />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
