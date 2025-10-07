
import ContentCard from "../../components/card/ContentCard";
import CardLabel from "../../components/card/CardLabel";
import Grid from "@mui/material/Grid";
import { content } from "../../content/Content";
import { useSearch } from "../../context/SearchContext";


export default function Movies() {
  const { searchTerm } = useSearch();

  const moviesContent = content.filter(
    (item) =>
      item.category === "Movie" &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
  
    <Grid container spacing={{xs: 2, md: 3}}>
      {moviesContent.length > 0 ? (
      moviesContent.map((item, index) => (
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
      ))
      ) : (
        <Grid size={12}>
          <p style={{ color: "gray", textAlign: "center" }}>No results found.</p>
        </Grid>
)}
    </Grid>

  );
}

