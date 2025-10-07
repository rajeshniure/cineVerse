import Grid from "@mui/material/Grid";
import ContentCard from "../../components/card/ContentCard";
import { content } from "../../content/Content";
import { useBookmark } from "../../context/BookmarkContext";
import { Typography } from "@mui/material";
import CardLabel from "../../components/card/CardLabel";
import { useSearch } from "../../context/SearchContext";

function BookmarkedPage() {
  const { bookmarks } = useBookmark();
const { searchTerm } = useSearch(); 

  const bookmarkedContent = content
    .filter((item) => bookmarks.includes(item.title))
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {bookmarkedContent.length > 0 ? (
          bookmarkedContent.map((item, index) => (
            <Grid key={index} size ={{ xs: 6, sm: 4, md: 3, lg: 3 }}>
              <ContentCard
            title={item.title}
            thumbnail={item.thumbnail}
            showLabel={false}
          />
          <CardLabel
            title={item.title}
            year={item.year}
            category={item.category}
            rating={item.rating}
          />
            </Grid>
          ))
        ) : (
          <Grid size={12}>
          <Typography color="gray" fontSize={16} textAlign="center">
            No bookmarked content found.
          </Typography>
        </Grid>
        )}
      </Grid>
  
  );
}

export default BookmarkedPage;
