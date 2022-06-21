import { Outlet, Navigate } from "react-router";
import { store } from "../store";

const PrivateRoutes = () => {
  const isLoggedIn = store.getState().user.isLoggedIn;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
