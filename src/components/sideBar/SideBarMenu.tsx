import { Stack } from "@mui/material"
import movies from "../../assets/icons/movies.svg"
import series from "../../assets/icons/tv-series.svg"
import bookmarks from "../../assets/icons/bookmark.svg"
import home from "../../assets/icons/home.svg"



function SideBarMenu() {
  return (
    <Stack direction={{xs:"row", md:"column"}} spacing={4} mt={{ md:4}}  alignItems="center">
<img src={home} alt="" style={{width:"15px"}}/>
<img src={movies} alt="" style={{width:"15px"}}/>
<img src={series} alt="" style={{width:"15px"}}/>
<img src={bookmarks} alt="" style={{width:"15px"}}/>
    </Stack>
  )
}

export default SideBarMenu