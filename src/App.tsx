import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Box component="header" sx={{ display: "flex", p: 4, gap: 2 }}>
        <Link to="/auth/sign-in">Войти</Link>
        <Link to="/auth/sign-up">Зарегестрироваться</Link>
      </Box>
      <Box sx={{ display: "flex", p: 4, gap: 2 }}>
        <Link to="/">Домой</Link>
        <Link to="/content">Контент</Link>
      </Box>
      <Outlet />
    </Box>
  );
};
