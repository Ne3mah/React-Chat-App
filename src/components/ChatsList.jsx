import { Box, Divider, IconButton, Stack, Typography } from "@mui/material"
import { PiCircleDashedLight } from "react-icons/pi";
import { RiInboxArchiveLine } from "react-icons/ri";
import "./ChatsList.css"
import { useTheme } from "@emotion/react"
import { SearchConversation } from "./SearchConversation";
import ChatRoom from "./ChatRoom";
import { Scrollbars } from 'react-custom-scrollbars-2';

export const ChatsList = () => {
  const theme = useTheme()
  
  return (
    <Stack className="chats-container" direction="column" p={3} sx={{backgroundColor : theme.palette.background.secondary}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" >
            <Box className ="chat-list-title" sx={{fontWeight: 'bold'}}>Chats</Box>
            <IconButton><PiCircleDashedLight className="circle-icon"/></IconButton>
        </Stack>

        <Box>
          <SearchConversation></SearchConversation>
        </Box>

        <Stack direction="row" alignItems="center" className="archived-section">
          <RiInboxArchiveLine className = "archived-icon"/>
          <Box className ="archived-title">Archived</Box>        
        </Stack>

        <Divider orientation="horizontal"/>

        <Stack className="chat-list-container"> 
            <Scrollbars autoHide style = {{ width: "280px" , height:"75vh" , margin:"12px 0px"}}>         
              <Box className ="chat-list-subtitle">Pinned</Box>            
              <ChatRoom></ChatRoom> 
              <ChatRoom></ChatRoom> 
              <ChatRoom></ChatRoom> 
              <ChatRoom></ChatRoom>  
              <Box className ="chat-list-subtitle">All Chats</Box>
              <ChatRoom></ChatRoom> 
              <ChatRoom></ChatRoom> 
              <ChatRoom></ChatRoom>
            </Scrollbars>
        </Stack>



    </Stack>
  )
}
