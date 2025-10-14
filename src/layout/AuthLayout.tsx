import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </Box>
  );
}

export default AuthLayout;