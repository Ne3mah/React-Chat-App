import { useTheme } from "@emotion/react"
import { Box, IconButton, InputBase, Stack } from "@mui/material"
import { PiTelegramLogo , PiSmiley  } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";

const ConversationFooter = () => {
  const theme = useTheme()
  return (
    <Stack className="conversation-footer" direction="row"  justifyContent="space-between" alignItems="center" p={3} spacing={3} style={{backgroundColor :theme.palette.background.secondary}}>
      <Stack direction="row" justifyContent="space-between" className=""  p={0.5} sx={{flexGrow:1, backgroundColor: theme.palette.background.main , borderRadius:"10px"}}>
        <Stack direction="row">
          <IconButton>
            <IoIosLink style={{color:theme.palette.text.main}}/>
          </IconButton>
          <InputBase
            sx={{color:theme.palette.text.main}}
            placeholder="Type a message"        
          /> 
        </Stack>
        <IconButton>
          <PiSmiley  style={{color:theme.palette.text.main}}/>
        </IconButton>     
      </Stack>
      <Box className="send-icon"><PiTelegramLogo style={{width:"24px",height:"24px"}}/></Box>
    </Stack>
  )
}

export default ConversationFooter