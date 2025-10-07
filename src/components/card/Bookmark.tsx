import { Box } from "@mui/material";
import { useBookmark } from "../../context/BookmarkContext";


interface BookmarkProps {
  title: string;
}

function Bookmark({ title }: BookmarkProps) {
  const { toggleBookmark, isBookmarked } = useBookmark();
  const active = isBookmarked(title);

  return (
    <Box
      width={{xs: "25px", md:"35px"}}
      height={{xs: "25px", md:"35px"}}
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
      onClick={() => toggleBookmark(title)}
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
          className="active"
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
