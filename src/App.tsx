import AppRoutes from "./routes/AppRoutes";
import { Box } from "@mui/material";


function App() {
  return (
    <>
    <AppRoutes />
    <Box m={2} alignItems={"center"} display={"flex"} flexDirection={"column"} gap={2}>
    </Box>
    </>
  )
}

export default App