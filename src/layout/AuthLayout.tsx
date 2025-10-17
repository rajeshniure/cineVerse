import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 3, md: 2 },
        overflow: 'hidden',
        
      }}
    >
      <Outlet />
    </Box>
  );
}

export default AuthLayout;