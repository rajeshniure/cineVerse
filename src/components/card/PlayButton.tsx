import { Box, Typography } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from 'react';

interface PlayButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  size?: 'small' | 'medium';
}

function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <Box
      onClick={onClick}
      display={"flex"}
      alignItems="center"
      gap={1}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderRadius: "20px",
        padding: "2px 7px",
        width: "fit-content",
        cursor: onClick ? "pointer" : "default",
        mt: 1,
      }}
    >
      <PlayCircleIcon sx={{ fontSize: { xs: 24, md: 35 } }} />
      <Typography variant="h4" fontSize={{ xs: "16px", md: "20px" }}>
        Play
      </Typography>
    </Box>
  );
}

export default PlayButton;