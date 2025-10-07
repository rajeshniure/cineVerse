import { Box, Typography } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function PlayButton() {
  return (
    <Box display={"flex"} alignItems="center" gap={1} sx={{backgroundColor: "rgba(255, 255, 255, 0.25)", borderRadius: "20px", padding: "2px 7px", width: "fit-content", cursor: "pointer", mt: 1}}>
        <PlayCircleIcon fontSize="large"/>
        <Typography variant="h4">Play</Typography>
    </Box>
  )
}

export default PlayButton