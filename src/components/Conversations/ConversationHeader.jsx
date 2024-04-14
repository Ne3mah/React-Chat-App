import { useTheme } from "@emotion/react"
import { Avatar, Box, IconButton, Stack } from "@mui/material"
import {faker} from "@faker-js/faker";
import { IoSearchOutline } from "react-icons/io5";

const ConversationHeader = () => {
  const theme = useTheme()
  return (
    <Stack  className="conversation-header" direction="row"  justifyContent="space-between" alignItems="center" p={3} sx={{backgroundColor :theme.palette.background.secondary}}>
      <Stack direction="row" justifyContent="center"  spacing={2}>
        <Avatar src={faker.image.avatar()}></Avatar>
        <Stack spacing={0.5}>
          <Box className="conversation-title">{faker.person.firstName()}</Box>
          <Box className="conversation-status">Online</Box>
        </Stack>
      </Stack>

      <IconButton><IoSearchOutline/></IconButton>
    </Stack>
  )
}

export default ConversationHeader