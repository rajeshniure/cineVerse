
import ContentCard from "./ContentCard";
import CardLabel from "./CardLabel";
import Grid from "@mui/material/Grid";
import { content } from "../../content/Content";
import { Typography } from "@mui/material";
import { useSearch } from "../../context/SearchContext";


export default function ThumbnailCard() {
  const { searchTerm } = useSearch();

  const recommendedContent = content.filter(
    (item) =>
      !item.isTrending &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (recommendedContent.length === 0) {
    return (
      <Typography color="gray" textAlign="center" mt={3}>
        No results found.
      </Typography>
    );
  }
  
  return (
    <>
     <Typography
        variant="h2"
        sx={{ color: "white", my: 2, fontFamily: 'Outfit Light' }}
      >
        Recommended For You
      </Typography>
    <Grid container spacing={{xs: 2, md: 3}}>
      {recommendedContent.map((item, index) => (
        <Grid key={index} size= {{ xs: 6, sm: 4, md: 3, lg: 3 }}>
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
      ))}
    </Grid>
    </>
  );
}

