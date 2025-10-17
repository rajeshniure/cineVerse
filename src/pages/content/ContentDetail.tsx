import React from "react";
import { useParams } from "react-router-dom";
import { content } from "../../content/Content";
import { Box, Typography } from "@mui/material";
import ContentCard from "../../components/card/ContentCard";

const VIDEO_ID = "dQw4w9WgXcQ";

export default function ContentDetail() {
  const { title } = useParams();
  const decodedTitle = title ? decodeURIComponent(title) : "";
  const item = content.find((c) => c.title === decodedTitle);
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (!item) {
    return (
      <Box sx={{ color: "white", p: 3 }}>
        <Typography variant="h4">Content not found</Typography>
      </Box>
    );
  }

  const handlePlay = () => setIsPlaying(true);

  return (
    <Box sx={{ color: "white" }}>
      <Box sx={{ flex: "0 0 auto" }}>
        {isPlaying ? (
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "80%" }, // responsive width
              height: { xs: 200, md: 560 },   // responsive height
              borderRadius: 2,
              overflow: "hidden",
              mx: "auto", // center horizontally
            }}
          >
            <iframe
              title="player"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        ) : (
          <ContentCard
            title={item.title}
            thumbnail={item.thumbnail}
            year={item.year}
            category={item.category}
            rating={item.rating}
            showLabel
            cardMediaSx={{
              height: { xs: 220, md: 560 },
              borderRadius: 2,
            }}
            cardSx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}
            onPlay={handlePlay}
          />
        )}
      </Box>
    </Box>
  );
}
