import { MessageInput, AttachmentButton, InputToolbox, SendButton, InfoButton } from '@chatscope/chat-ui-kit-react';
import { IconButton } from '@material-ui/core';
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
            // borderTop: "1px dashed",
            alignItems:'center',
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
            <IconButton aria-label="Send" onClick={() => handleSend(message)} disabled={message.length==0} color={"secondary"} >
                <SendRoundedIcon  style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}}  />
            </IconButton>
            <IconButton aria-label="Equation" onClick={() => alert("Equation!")} color="secondary" >
                <FunctionsRoundedIcon style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}}  />
            </IconButton>
        </div>
    )
}