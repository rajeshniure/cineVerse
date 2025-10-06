import { Outlet, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SideBar from "../components/sideBar/SideBar";
import SearchBar from "../components/search/SearchBar";

type PathTitleMap = Record<string, string>;
const pathTitleMap: PathTitleMap = {
  "/": "Home",
  "/movies": "Movies",
  "/series": "TV Series",
  "/bookmarks": "Bookmarks",
};

const Layout = () => {
  const location = useLocation();
  const title = pathTitleMap[location.pathname] || "Home";

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      width="100%"
      minHeight={{ xs: "auto", md: "100vh" }}
      bgcolor="background.default"
    >
      {/* Sidebar */}
      <Box
        m={{ xs: 0, md: 3 }}
        width={{ xs: "100%", md: "100px" }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-start" }}
        alignItems="center"
      >
        <SideBar />
      </Box>

      {/* Main Content */}
      <Box flex={1} width="100%" px={2}>
        {/* Search Bar */}
        <Box
          height={{ xs: "auto", md: "60px" }}
          mt={{ xs: 2, md: 4 }}
          display="flex"
          alignItems="center"
        >
          <SearchBar />
        </Box>

        {/* Page Title */}
        <Typography
          variant="h4"
          mt={3}
          mb={2}
          textAlign={"left"}
          fontFamily={'Outfit Light'}
          fontSize={'24px'}
        >
          {title}
        </Typography>

        {/* Routed Pages */}
        <Box pb={4}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
