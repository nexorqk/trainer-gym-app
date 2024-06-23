import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Box component="header" sx={{ display: "flex" }}>
        <Link style={{ padding: "20px" }} to="/auth/sign-in">
          Войти
        </Link>
        <Link style={{ padding: "20px" }} to="/auth/sign-up">
          Зарегестрироваться
        </Link>
      </Box>
      <Outlet />
    </Box>
  );
};
