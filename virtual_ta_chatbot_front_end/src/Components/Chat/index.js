import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Loader } from '@chatscope/chat-ui-kit-react';
import {Loading} from 'Components'
import { useRef, useState, useEffect } from 'react';


// import TextInput from '../TextInput'

export const Chat = ({message, setMessage, conversation, setConversation}) => {
    const inputRef = useRef();
    const [messageLoad, setMessageLoad] = useState("false")

    const handleSend = message => {
        setMessageLoad("true")
        setConversation([...conversation, {
          message,
          direction: 'outgoing'
        }]);
        setMessage("");
        inputRef.current.focus();
      };
    //Hardcoded load
    useEffect(() => {
        const timer = setTimeout(() => {
          setMessageLoad("false")
        }, 5000); //change 5000 to whatever time you want
        return () => clearTimeout(timer);
      }, [messageLoad]);
    return(
        <div style={{ position: 'fixed', bottom: 0, width: '100%', flex:1 }}>
            <MainContainer>
                <ChatContainer>       
                <MessageList scrollBehavior="smooth">
                    {conversation.map((msg, index) => 
                    <Message key={index} model={msg}/>
                    )}
                <div as="MessageSeparator"> //This is to avoid error of loader not being valid prop
                    <Loading isvisible={messageLoad} align="left" />
                </div>
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