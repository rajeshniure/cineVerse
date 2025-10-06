import { Box } from "@mui/material";
import UserProfile from "./UserProfile";
import SideBarMenu from "./SideBarMenu";
import SideBarLogo from "./SideBarLogo";

const SideBar = () => {
  return (
    <Box
      width={{ xs: "100%", md: "80px" }}
      height={{ xs: "60px", md: "100vh" }}
      p={{xs:1, md:3}}
      bgcolor="background.paper"
      borderRadius={{xs:0, md:6}}
      display="flex"
      flexDirection={{ xs: "row", md: "column" }}
      justifyContent={{ xs: "space-between", md: "flex-start" }}
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection={{ xs: "row", md: "column" }}
        justifyContent={{ xs: "space-between", md: "flex-start" }}
        alignItems="center"
        width="100%"
        height="100%"
      >
        <SideBarLogo />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "row", md: "column" }}
          mt={{ xs: 0, md: 4 }}
        >
          <SideBarMenu />
        </Box>


        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ xs: 0, md: "auto" }}
        >
          <UserProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
