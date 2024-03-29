import { Avatar, Box, Stack, Typography } from "@mui/material";
import Ava from '../assets/images/test_avatar.jpg';
import "./ChatRoom.css"
import {faker} from "@faker-js/faker";

const ChatRoom = () => {
  return (
    <Stack className="chat-room-container">
        <Stack direction="row">
            <Avatar className='avatar-container' src={faker.image.avatar()}/>
            <Stack direction="row" justifyContent="space-between" alignItems="start"  sx={{ width:"100%", marginLeft:"8px"}}>
                <Stack>
                    <Typography variant="caption">{faker.person.firstName()}</Typography>
                    <Typography variant="caption">{faker.color.human()}</Typography>
                </Stack>
                <Box>
                    <Typography variant="caption">9:35</Typography>
                </Box>
            </Stack>            
        </Stack>
            
        
    </Stack>
  )
}

export default ChatRoom