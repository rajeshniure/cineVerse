import { Box } from "@mui/material"
import logo from "/assets/icons/logo.svg";


function SideBarLogo() {
  return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "25px", height: "25px", objectFit: "contain" }}
          />
        </Box>
  )
}

export default SideBarLogo