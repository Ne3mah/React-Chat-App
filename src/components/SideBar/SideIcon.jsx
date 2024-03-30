import { Box } from "@mui/material";

export const SideIcon = ({children, onClickNavIcon, isActive}) => {

  return (
    <Box className={`sidebar-icon-box ${isActive && 'active'}`}  onClick={onClickNavIcon}>
      {children}
    </Box>
  )
}
