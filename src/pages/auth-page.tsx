import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const AuthPage = () => (
  <Box padding={3} display="flex" flexDirection="column" gap={3}>
    <Outlet />
    <Link to="/">Назад</Link>
  </Box>
);
