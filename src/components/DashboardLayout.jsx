import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ minHeight: "85" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
