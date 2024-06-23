import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const PrivateRoute = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuth
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/sign-in" />;
};
