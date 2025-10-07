import { TextField, Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";



function SearchBar() {
  const { pathname } = useLocation();
   const { searchTerm, setSearchTerm } = useSearch();

  const getPlaceholder = () => {
    if (pathname === "/movies") return "Search for movies";
    if (pathname === "/series") return "Search for TV series";
    if (pathname === "/bookmarks") return "Search for bookmarked shows";
    return "Search for movies or TV series";
  };
  return (
    <>
    <Box display={"flex"} alignItems="center" gap={1} width={"100%"} >
    <SearchIcon />
    <TextField
      fullWidth
      variant="standard"
      placeholder={getPlaceholder()}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{
       
        '& .MuiInput-underline:before': {
          borderBottom: 'none', 
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'secondary.main', 
        },
        '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
          borderBottom: 'none',
        },
      }}
    />
    </Box>
    </>
  );
}

export default SearchBar;
