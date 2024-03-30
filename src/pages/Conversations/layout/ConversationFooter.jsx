import { useTheme } from "@emotion/react"

const ConversationFooter = () => {
  const theme = useTheme()
  return (
    <div className="conversation-footer" style={{backgroundColor :theme.palette.background.secondary}}></div>
  )
}

export default ConversationFooter