import { Box, Divider, IconButton, Stack, Typography } from "@mui/material"
import { PiCircleDashedLight } from "react-icons/pi";
import { RiInboxArchiveLine } from "react-icons/ri";
import "./ChatsList.css"
import { useTheme } from "@emotion/react"
import { SearchConversation } from "./SearchConversation";
import ChatRoom from "./ChatRoom";

export const ChatsList = () => {
  const theme = useTheme()
  
  return (
    <Stack className="chats-container" direction="column" p={3} sx={{backgroundColor : theme.palette.background.secondary}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" >
            <Typography variant="h5" sx={{fontWeight: 'bold'}}>Chats</Typography>
            <IconButton><PiCircleDashedLight className="circle-icon"/></IconButton>
        </Stack>

        <Box>
          <SearchConversation></SearchConversation>
        </Box>

        <Stack direction="row" alignItems="center" className="archived-section">
          <RiInboxArchiveLine width="22px" height="24px"/>
          <Typography variant="caption" ml={1} sx={{color: "#709CE6", fontWeight:"bold"}}>Archived</Typography>        
        </Stack>

        <Divider orientation="horizontal"/>

        <Stack className="chat-list-container">
          <Typography variant="caption" sx={{color: "#676667", fontWeight: 700 , fontSize: "16px", lineHeight: "21.86px", margin:"12px 0px"}}>Pinned</Typography>
          <ChatRoom></ChatRoom>
          <ChatRoom></ChatRoom> 
          <ChatRoom></ChatRoom> 
          <ChatRoom></ChatRoom> 
          <ChatRoom></ChatRoom>  
          <Typography variant="caption" sx={{color: "#676667", fontWeight: 700 , fontSize: "16px", lineHeight: "21.86px" , margin:"12px 0px"}}>All Chats</Typography>
          <ChatRoom></ChatRoom> 
          <ChatRoom></ChatRoom> 
          <ChatRoom></ChatRoom>
        </Stack>



    </Stack>
  )
}
