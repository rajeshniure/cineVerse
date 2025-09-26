import { Box } from "@mui/material";
import circleprofile from "../../assets/image/circleprofile.svg";

const UserProfile = () => {
  return (
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
  );
};

export default UserProfile;
