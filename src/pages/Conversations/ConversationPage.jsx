import { Stack } from "@mui/material";
import "./ConversationPage.css";
import ConversationHeader from "./layout/ConversationHeader";
import ConversationSpace from "./layout/ConversationSpace";
import ConversationFooter from "./layout/ConversationFooter";

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