import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface DetailsProps {
  title: string;
  year: number;
  category: string;
  rating: string;
  description?: string;
  onPlay?: () => void;
}

const Details: React.FC<DetailsProps> = ({
  title,
  year,
  category,
  rating,
  description = "No description available.",
  onPlay,
}) => {
  const theme = useTheme();
  const CategoryIcon = category === "Movie" ? MovieIcon : TvIcon;

  return (
    <Box
      sx={{
        mt: { xs: 2, md: 4 },
        width: { xs: "100%", md: "80%" },
        mx: "auto",
        color: "white",
        textAlign: "left",
        position: "relative",
        zIndex: 2,
        p: { xs: 1, md: 2 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", md: "2.8rem" },
          mb: 1,
          textShadow: "0px 2px 10px rgba(0,0,0,0.6)",
        }}
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: "grey.600" }} />}
        sx={{ mb: 1.5 }}
      >
        <Typography sx={{ color: "grey.400", fontSize: { xs: "0.9rem", md: "1rem" } }}>
          {year}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <CategoryIcon sx={{ fontSize: 18, color: "grey.400" }} />
          <Typography sx={{ color: "grey.400", fontSize: { xs: "0.9rem", md: "1rem" } }}>
            {category}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <StarIcon sx={{ fontSize: 18, color: "gold" }} />
          <Typography sx={{ color: "grey.400", fontSize: { xs: "0.9rem", md: "1rem" } }}>
            {rating}
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          color: "grey.300",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          lineHeight: 1.6,
          mb: 3,
          maxWidth: { xs: "100%", md: "70%" },
          textShadow: "0px 1px 8px rgba(0,0,0,0.5)",
        }}
      >
        {description}
      </Typography>

      <Button
        onClick={onPlay}
        variant="contained"
        startIcon={<PlayArrowIcon />}
        sx={{
          background: theme.palette.primary.main,
          color: "white",
          fontWeight: 600,
          px: 3,
          py: 1,
          borderRadius: "12px",
          textTransform: "none",
          "&:hover": {
            background: theme.palette.primary.dark,
          },
        }}
      >
        Play Now
      </Button>
    </Box>
  );
};

export default Details;
