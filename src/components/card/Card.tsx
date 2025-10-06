// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { Stack } from "@mui/material";
// import { content } from "../../content/Content";
// import SideBarData from "../sideBar/SideBarData";

// export default function ThumbnailCard() {
//   return (
//     <Grid container spacing={4}>
//       {content.map((item, index) => {
//         const iconData = SideBarData.find((d) => {
//           if (item.category === "Movie" && d.title === "Movies") return true;
//           if (item.category === "TV Series" && d.title === "TV Series") return true;
//           return false;
//         });

//         return (
//           <Grid key={index} size = {{ xs: 6, sm: 4, md: 3, lg: 3 }}>
//             <Card sx={{ maxWidth: 345, borderRadius: 2, mb: 1 }}>
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={item.thumbnail?.regular?.small}
//                 alt={item.title}
//                 sx={{ objectFit: "cover" }}
//               />
//               </Card>

//               <Stack direction="row" spacing={1}>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.year}
//                 </Typography>

//                 <Stack direction="row" spacing={0.3} alignItems="center">
//                     <Typography variant="body2" color="text.secondary"> • </Typography>
//                   {iconData && (
//                     <img
//                       src={iconData.icon}
//                       alt={item.category}
//                       style={{
//                         width: "12px",
//                         height: "12px",
//                         filter: "brightness(0) invert(0.8)",
//                       }}
//                     />
//                   )}

//                   <Typography variant="body2" color="text.secondary" >
//                     {item.category} • {item.rating}
//                   </Typography>
//                 </Stack>
//               </Stack>

//               <Typography
//                 gutterBottom
//                 variant="h6"
//                 component="div" 
//               >
//                 {item.title}
//               </Typography>
            
//           </Grid>
//         );
//       })}
//     </Grid>
//   );
// }

import ContentCard from "./ContentCard";
import CardLabel from "./CardLabel";
import Grid from "@mui/material/Grid";
import { content } from "../../content/Content";


export default function ThumbnailCard() {
  return (
    <Grid container spacing={{xs: 2, md: 3}}>
      {content.map((item, index) => (
        <Grid key={index} size= {{ xs: 6, sm: 4, md: 3, lg: 3 }}>
          <ContentCard
            title={item.title}
            thumbnail={item.thumbnail}
          />
          <CardLabel
            title={item.title}
            year={item.year}
            category={item.category}
            rating={item.rating}
          />
        
        </Grid>
      ))}
    </Grid>
  );
}

