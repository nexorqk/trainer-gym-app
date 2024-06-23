import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { signIn, signOut } from "../features/auth/authSlice";

export const SignIn = () => {
  const status = useAppSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography variant="h2">Состояние</Typography>
      <Typography variant="h2">
        {status ? "Вход выполнен" : "Вход не выполнен"}
      </Typography>
      <Stack maxWidth={300} spacing={2} sx={{ marginTop: 4 }}>
        <Button variant="contained" onClick={() => dispatch(signIn())}>
          Войти
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={() => dispatch(signOut())}
        >
          Выйти
        </Button>
      </Stack>
    </Box>
  );
};
