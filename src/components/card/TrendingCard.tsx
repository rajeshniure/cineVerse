import ContentCard from "./ContentCard";
import { Box, } from "@mui/material";
import { content } from "../../content/Content";

function TrendingCard() {
    const trendingContent = content.filter(item => item.isTrending);
  return (
    
    <Box sx={{ mt: 3 }}>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          pb: 1,
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display:"none",
            
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 10,
          },
        }}
      >
        {trendingContent.map((item, index) => (
          <Box key={index} sx={{ flex: "0 0 auto"}}>
            <ContentCard
              title={item.title}
              thumbnail={item.thumbnail}
              year={item.year}
              category={item.category}
              rating={item.rating}
              showLabel
              cardMediaSx={{ height: { xs: 160, md: 260 }, borderRadius: 2 }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TrendingCard;
