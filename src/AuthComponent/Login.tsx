import { Box,  Stack,  Typography } from "@mui/material"
import CustomInput from "../components/CustomInput"
import Button from "../components/Button"

function Login() {
  return (
    <Box bgcolor={"background.paper"} p={5} borderRadius={4} width={{xs: "100%", md: "400px"}}>
        <Typography variant="h1" mb={3}>Sign up</Typography>
    
    <Box display={"flex"} flexDirection={"column"} gap={4}>
        <CustomInput placeholder="Email Address"/>
        <CustomInput placeholder="password"/>
        <CustomInput placeholder="Confirm password"/>
        <Button label="Login to your account"/>
    </Box>
    <Stack direction={"row"} mt={2} gap={1} justifyContent={"center"}>
    <Typography >Already have an account?</Typography>
    <Typography color={"primary"} sx={{cursor: "pointer"}}>Login</Typography>
    </Stack>
    </Box>
  )
}

export default Login