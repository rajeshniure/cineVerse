import { TextField, Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <>
    <Box display={"flex"} alignItems="center" gap={1} width={"100%"} >
    <SearchIcon />
    <TextField
      fullWidth
      variant="standard"
      placeholder="Search for movies or TV series"
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
