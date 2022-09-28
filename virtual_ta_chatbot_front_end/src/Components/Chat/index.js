import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import React, { useRef } from 'react';


// import TextInput from '../TextInput'

export const Chat = ({message, setMessage, conversation, setConversation}) => {
    const inputRef = useRef();
    const handleSend = message => {
        setConversation([...conversation, {
          message,
          direction: 'outgoing'
        }]);
        setMessage("");
        inputRef.current.focus();
      };
    return(
        <div style={{ position: 'fixed', bottom: 0, width: '100%', flex:1 }}>
            <MainContainer>
                <ChatContainer>       
                <MessageList scrollBehavior="smooth">
                    {conversation.map((msg, index) => 
                    <Message key={index} model={msg}/>
                    )}
                </MessageList>
                <MessageInput
                    attachButton={false} 
                    onSend={handleSend}
                    placeholder="Talk with TA here"
                    value={message}
                    onChange={(val) => setMessage(val)}
                    ref={inputRef}
                />          
                </ChatContainer>
            </MainContainer>
        </div>
    )
}