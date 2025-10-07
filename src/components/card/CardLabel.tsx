import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import SideBarData from "../sideBar/SideBarData";

interface ContentCardProps {
  title?: string;
  year?: number;
  category?: string;
  rating?: string;
}

const ContentLabel: React.FC<ContentCardProps> = ({
  title,
  year,
  category,
  rating,
}) => {
  const iconData = SideBarData.find((d) => {
    if (category === "Movie" && d.title === "Movies") return true;
    if (category === "TV Series" && d.title === "TV Series") return true;
    return false;
  });

  return (
    <Box sx={{ pl: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ color: "text.secondary" }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: 10, md: 14 },
          }}
        >
          {year}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: 10, md: 14 },
          }}
        >
          •
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          {iconData && (
            <Box
              component="img"
              src={iconData.icon}
              alt={category}
              sx={{
                width: { xs: 8, md: 14 },
                height: { xs: 8, md: 14 },
                filter: "brightness(0) invert(0.8)",
                opacity: 0.8,
              }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 10, md: 14 },
              lineHeight: 1.2,
            }}
          >
            {category} • {rating}
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: { xs: 14, sm: 16, md: 20 },
          
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ContentLabel;
