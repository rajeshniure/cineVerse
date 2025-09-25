
import React from "react";
import SearchBar from "./components/search/SearchBar";
import { Box } from "@mui/material";

const App: React.FC = () => {


  return (
    <Box style={{ padding: 24, maxWidth: 350 }}>
      <SearchBar />
    </Box>
  );
};

export default App;
