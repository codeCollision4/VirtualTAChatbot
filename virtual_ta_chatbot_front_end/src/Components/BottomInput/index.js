import { MessageInput, AttachmentButton, InputToolbox, SendButton, InfoButton } from '@chatscope/chat-ui-kit-react';
import { IconButton } from '@mui/material';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
export const BottomInput = ({
    handleSend,
    message,
    setMessage,
    inputRef,
}) => {
    return (
        <div as="MessageInput" style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px dashed #d1dbe4",
            alignItems:'center'
          }}>
            <MessageInput
                attachButton={false} 
                onSend={handleSend}
                placeholder="Talk with TA here"
                value={message}
                onChange={(val) => setMessage(val)}
                ref={inputRef}
                style={{
                    flexGrow: 1,
                    borderTop: 0,
                    flexShrink: "initial",
                }}
                sendButton={false}
            />
            <IconButton aria-label="Send">
                <SendRoundedIcon color={message.length>0 ? "primary" : "disabled"} style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}} onClick={() => handleSend(message)}  />
            </IconButton>
            <IconButton aria-label="Equation">
                <FunctionsRoundedIcon color="primary" style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}} onClick={() => alert("Equation!")}  />
            </IconButton>
        </div>
    )
}