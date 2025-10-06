import React from "react";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import SideBarData from "../sideBar/SideBarData";

interface ContentCardProps {
  title: string;
  year: number;
  category: string;
  rating: string;
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
    <>
      <Stack direction="row" spacing={1} sx={{ px: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>

        <Stack direction="row" spacing={0.3} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          {iconData && (
            <img
              src={iconData.icon}
              alt={category}
              style={{
                width: "12px",
                height: "12px",
                filter: "brightness(0) invert(0.8)",
              }}
            />
          )}

          <Typography variant="body2" color="text.secondary">
            {category} • {rating}
          </Typography>
        </Stack>
      </Stack>

      <Typography gutterBottom variant="h6" component="div" sx={{ px: 1}}>
        {title}
      </Typography>
      </>
   
  );
};

export default ContentLabel;
