import { Stack } from "@mui/material";
import "./index.css";
import ConversationHeader from "./ConversationHeader";
import ConversationSpace from "./ConversationSpace";
import ConversationFooter from "./ConversationFooter"; 

const ConversationPage = () => {
  return (
    <Stack className="conversation-page-container">
      <ConversationHeader/>
      <ConversationSpace/>
      <ConversationFooter/>
    </Stack>
  )
}

export default ConversationPage