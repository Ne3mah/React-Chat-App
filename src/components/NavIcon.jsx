import { Box } from "@mui/material";
import "./NavIcon.css"
import { Children } from "react";

export const NavIcon = ({children, onClickNavIcon, isActive}) => {

  return (
    <Box className={`nav-icon-box ${isActive && 'active'}`}  onClick={onClickNavIcon}>
      {children}
    </Box>
  )
}
