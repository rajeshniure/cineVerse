import { Box } from "@mui/material";
import circleprofile from "/assets/image/circleprofile.svg";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <NavLink to="/profile">
    <Box
      component="img"
      src={circleprofile}
      alt="Profile"
      sx={{
        width: { xs: "25px", md: "40px" },
        height: "auto",
        objectFit: "cover",
        cursor: "pointer",
      }}
    />
    </NavLink>
  );
};

export default UserProfile;
