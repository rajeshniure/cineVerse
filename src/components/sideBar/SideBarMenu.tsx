import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import SideBarData from "./SideBarData";

function SideBarMenu() {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      spacing={4}
      mt={{ md: 4 }}
      alignItems="center"
    >
      {SideBarData.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
        >
            {({ isActive }) => (
            <img
              src={item.icon}
              alt={item.title}
              style={{ 
                width:"16px",
                filter: isActive ? "brightness(0) invert(1)" : "none",
              }}
            />
          )}
        </NavLink>
      ))}
    </Stack>
  );
}

export default SideBarMenu;
