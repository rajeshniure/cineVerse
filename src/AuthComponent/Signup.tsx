import {type FormEvent } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Signup() {
  
 const navigate = useNavigate();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful! Please login.");
    navigate("/auth/login");
  };

  return (
    <Box bgcolor={"background.paper"} p={5} borderRadius={4} width={{ xs: "100%", md: "400px" }}>
      <Typography variant="h1" mb={3}>
        Sign up
      </Typography>
    <form onSubmit={handleSignup}>
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <CustomInput placeholder="Email Address" type="email" name="email" />
        <CustomInput placeholder="Password" type="password" name="password" />
        <CustomInput placeholder="Confirm password" type="password" name="confirmPassword" />
        <Button label="Create account" type="submit" />
      </Box>
    </form>
      <Stack direction={"row"} mt={2} gap={1} justifyContent={"center"}>
        <Typography>Already have an account?</Typography>
        <Typography
          color={"primary"}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/auth/login")}
        >
          Login
        </Typography>
      </Stack>
    </Box>
  );
}

export default Signup;
