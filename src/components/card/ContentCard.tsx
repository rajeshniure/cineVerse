import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import Bookmark from "./Bookmark";
import PlayButton from "./PlayButton";
import { useNavigate } from "react-router-dom";
import CardLabel from "./CardLabel";

interface ContentCardProps {
  title: string;
  thumbnail: {
    regular: {
      small: string;
    };
  };
  year?: number;
  category?: string;
  rating?: string;
  showLabel?: boolean;
  cardMediaSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
  onPlay?: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  showLabel = true,
  cardMediaSx,
  cardSx,
  onPlay,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  // optional: navigate to content detail page
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const encoded = encodeURIComponent(title);
    navigate(`/content/${encoded}`);
  };

  return (
    <Card
      sx={{ borderRadius: 2, mb: 1, position: "relative", ...cardSx }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      
    >
      <CardMedia
        component="img"
        image={thumbnail?.regular?.small}
        alt={title}
        sx={{
          objectFit: "cover",
          height: { xs: 110, md: 180 },
          transition: "filter 0.3s ease",
          filter: hovered ? "brightness(0.5)" : "brightness(1)",
          ...cardMediaSx,
        }}
      />

      {/* Bookmark icon */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 14,
          zIndex: 2,
        }}
      >
        <Bookmark title={title} />
      </Box>

      {/* Play button appears on hover */}
      {hovered && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
        >
          <PlayButton
            onClick={(e) => {
              e.stopPropagation();
              onPlay?.(); 
              handlePlayClick(e);
            }}
          />
        </Box>
      )}

      {showLabel && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            color: "white",
          }}
        >
          <CardLabel
            title={title}
            year={year}
            category={category}
            rating={rating}
          />
        </Box>
      )}
    </Card>
  );
};

export default ContentCard;
