import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <Button
      variant="contained"
      onClick={handleLogout}
      sx={{ cursor: "pointer", color: "background.main",fontSize: { xs: "12px", md: "18px" }, fontWeight: 500 }}
    >
      Logout
    </Button>
  );
}

export default Logout;
