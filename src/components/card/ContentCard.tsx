import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import Bookmark from "./Bookmark";

interface ContentCardProps {
  title: string;
  thumbnail: {
    regular: {
      small: string;
    };
  };
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  thumbnail,
}) => {
 
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, mb: 1, position: "relative" }}>
      <CardMedia
        component="img"
        image={thumbnail?.regular?.small}
        alt={title}
        sx={{ objectFit: "cover", height: { xs: 110, md: 180 } }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 14,
          zIndex: 2,
        }}
      >
        <Bookmark />
      </Box>
    </Card>
      
  );
};

export default ContentCard;
