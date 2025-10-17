import { Outlet, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SideBar from "../components/sideBar/SideBar";
import SearchBar from "../components/search/SearchBar";
import { useSearch } from "../context/SearchContext";
import { useEffect } from "react";

type PathTitleMap = Record<string, string>;
const pathTitleMap: PathTitleMap = {
  "/": "Trending",
  "/movies": "Movies",
  "/series": "TV Series",
  "/bookmarks": "Bookmarked",
};

const Layout = () => {
  const location = useLocation();

  const { setSearchTerm } = useSearch();

  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);
  const title = pathTitleMap[location.pathname];

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
        alignItems="flex-start"
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
          mt={{xs: 1, md: 3}}
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
