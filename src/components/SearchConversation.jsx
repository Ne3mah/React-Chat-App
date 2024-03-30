import {InputBase, IconButton, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@emotion/react';
import "./SearchConversation.css"

export const SearchConversation = () => {
  const theme = useTheme()
  return (
    <Box className="search-container"  sx={{backgroundColor: theme.palette.background.paper}}>
      <IconButton>
        <SearchIcon sx={{color:theme.palette.text.secondary}}/>
      </IconButton>
      <InputBase
        sx={{ ml: 1 , color:theme.palette.text.secondary}}
        placeholder="Search"        
      />      
    </Box>
  );
}
