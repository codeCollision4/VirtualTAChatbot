import { MessageInput, AttachmentButton, InputToolbox, SendButton, InfoButton } from '@chatscope/chat-ui-kit-react';
import { IconButton } from '@mui/material';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Modal from 'react-modal';
import React from 'react';
export const BottomInput = ({
    handleSend,
    message,
    setMessage,
    inputRef,
}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
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
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal}>close</button>
            </Modal>
            <IconButton aria-label="Send" onClick={() => handleSend(message)} disabled={message.length==0} color={"secondary"} >
                <SendRoundedIcon  style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}}  />
            </IconButton>
            <IconButton aria-label="Equation" onClick={openModal} color="secondary" >
                <FunctionsRoundedIcon style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}}  />
            </IconButton>
        </div>
    )
}