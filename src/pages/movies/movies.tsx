
import ContentCard from "../../components/card/ContentCard";
import CardLabel from "../../components/card/CardLabel";
import Grid from "@mui/material/Grid";
import { content } from "../../content/Content";


export default function Movies() {
  const moviesContent = content.filter(item => item.category === "Movie");
  return (
  
    <Grid container spacing={{xs: 2, md: 3}}>
      {moviesContent.map((item, index) => (
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

  );
}

