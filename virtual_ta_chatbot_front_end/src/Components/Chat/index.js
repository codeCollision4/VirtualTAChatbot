import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Loader, MessageSeparator, Avatar } from '@chatscope/chat-ui-kit-react';
import { Loading, Separator, BottomInput } from 'Components'
import { useRef, useState, useEffect } from 'react';


// import TextInput from '../TextInput'

export const Chat = ({message, setMessage, conversation, setConversation, height}) => {
    const inputRef = useRef();
    const messageListRef = useRef();
    const [messageLoad, setMessageLoad] = useState("false")

    const handleSend = message => {
      if (message.length===0)
        return
      setMessageLoad("true")
      setConversation([...conversation, {
        message,
        direction: 'outgoing'
      }]);
      setMessage("");
      inputRef.current.focus();
      messageListRef.current.scrollToBottom('auto');
      localStorage.setItem("conversation0", JSON.stringify([...conversation, {
        message,
        direction: 'outgoing'
      }]));
      };
    //Hardcoded load
    useEffect(() => {
        const timer = setTimeout(() => {
          setMessageLoad("false")
        }, 5000); //change 5000 to whatever time you want
        return () => clearTimeout(timer);
      }, [messageLoad]);
    return(
        <div style={{ position: 'fixed', bottom: 0, width: '100%', height: height - 64, flex:1 }}>
            <MainContainer>
                <ChatContainer>       
                <MessageList scrollBehavior="auto" ref={messageListRef} >
                <MessageSeparator content={Date().toLocaleString()} />
                    {conversation.map((msg, index) => 
                    <Message key={index} model={msg}/>
                    )}
                    {/* <Avatar src={'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'} name={"Zoe"} size="md" />
                    <Message.ImageContent src={'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600'} width={200} /> */}
                <div as="MessageSeparator">
                    <Loading isvisible={messageLoad} align="left" />
                </div>
                </MessageList>
                <div as="MessageInput" >
                    <BottomInput handleSend={handleSend} message={message} setMessage={setMessage} inputRef={inputRef} />
                  </div>       
                </ChatContainer>
            </MainContainer>
        </div>
    )
}
