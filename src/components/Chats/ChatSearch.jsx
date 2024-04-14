import {InputBase, IconButton, Box} from '@mui/material';
import { useTheme } from '@emotion/react';
import { IoSearchOutline } from "react-icons/io5";

 const ChatSearch = () => {
  const theme = useTheme()
  return (
    <Box className="search-container"  sx={{backgroundColor: theme.palette.background.main}}>
      <IconButton>
        <IoSearchOutline style={{color:theme.palette.text.main}}/>
      </IconButton>
      <InputBase
        sx={{ ml: 1 , color:theme.palette.text.main}}
        placeholder="Search"        
      />      
    </Box>
  );
}

export default ChatSearch
