import { Box, Divider, IconButton, Stack} from "@mui/material"
import { RiInboxArchiveLine } from "react-icons/ri";
import "./ChatsList.css"
import { useTheme } from "@emotion/react"
import ChatRoom from "./components/ChatRoom";
import ChatSearch from "./components/ChatSearch";
import { Scrollbars } from 'react-custom-scrollbars-2';

export const ChatsList = () => {
  const theme = useTheme()
  
  return (
    <Stack className="chats-container" direction="column" p={3} sx={{backgroundColor : theme.palette.background.secondary}}>        
        <Box className ="chat-list-title" sx={{fontWeight: 'bold'}}>Chats</Box>
        
        <ChatSearch/>

        <Stack direction="row" alignItems="center" className="archived-section">
          <RiInboxArchiveLine className = "archived-icon"/>
          <Box className ="archived-title">Archived</Box>        
        </Stack>

        <Divider orientation="horizontal"/>

        <Stack className="chat-list-container"> 
            <Scrollbars autoHide style = {{ width: "280px" , height:"70vh" , margin:"12px 0px"}}>         
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
