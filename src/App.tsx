import AppRoutes from "./routes/AppRoutes";
import { Box } from "@mui/material";
import Login from "./AuthComponent/Login";


function App() {
  return (
    <>
    <AppRoutes />
    <Box m={2} alignItems={"center"} display={"flex"} flexDirection={"column"} gap={2}>
    <Login />
    </Box>
    </>
  )
}

export default App