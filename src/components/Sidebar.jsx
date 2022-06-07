import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/exercises">Exerices</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
