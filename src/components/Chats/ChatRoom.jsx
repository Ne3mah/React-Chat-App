import { Avatar, Box, Stack, Typography } from "@mui/material";
import {faker} from "@faker-js/faker";
import { useTheme } from "@emotion/react";

const ChatRoom = () => {
    const theme = useTheme()
  return (
    <Stack className="chat-room-container" sx={{backgroundColor : theme.palette.background.paper , color: theme.palette.text.primary}}>
        <Stack direction="row">
            <Avatar className='avatar-container' src={faker.image.avatar()}/>
            <Stack direction="row" justifyContent="space-between" alignItems="start"  sx={{ width:"100%", marginLeft:"8px"}}>
                <Stack>
                    <Box className = "room-title">{faker.person.firstName()}</Box>
                    <Box className = "room-sub-title">{faker.person.bio()}</Box>
                </Stack>
                <Stack alignItems="center">
                    <Box className = "room-date">9:35</Box>
                    <Box className = "unread-msg">2</Box>
                </Stack>
            </Stack>            
        </Stack>
            
        
    </Stack>
  )
}

export default ChatRoom