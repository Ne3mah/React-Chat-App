import { useTheme } from "@emotion/react"

const ConversationSpace = () => {
  const theme = useTheme()
  const backgroundColorStyle = theme.palette.mode === "dark" ? { backgroundColor: theme.palette.background.paper } : {};
  return (
    <div className="conversation-space" style = {backgroundColorStyle}></div>
  )
}

export default ConversationSpace