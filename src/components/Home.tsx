import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100% - 166px)",
      }}
    >
      <Typography fontSize={50} fontWeight={700}>
        HOME
      </Typography>
    </Box>
  );
};
