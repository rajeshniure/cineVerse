import { Box } from "@mui/material";
import { useState } from "react";

function Bookmark() {
  const [active, setActive] = useState(false);

  return (
    <Box
      width="35px"
      height="35px"
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={active ? "#979797" : "#979797"}
      sx={{
        cursor: "pointer",
        "&:hover": {
          bgcolor: active ? "#979797" : "white",
          "& img.normal": {
            filter: "invert(0%) brightness(0%)",
          },
          "& img.active": {
            filter: "invert(100%) brightness(100%)",
          },
        },
      }}
      onClick={() => setActive(!active)}
    >
      {!active ? (
        <img
          src="src/assets/icons/bookmarkicon.svg"
          alt="bookmark"
          className="normal"
          style={{
            width: "14px",
            height: "14px",
          }}
        />
      ) : (
        <img
          src="src/assets/icons/activebookmark.svg"
          alt="activebookmark"
          style={{
            width: "14px",
            height: "14px",
            filter: "invert(0%) brightness(100%)",
            
          }}
        />
      )}
    </Box>
  );
}

export default Bookmark;
