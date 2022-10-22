import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Loader, MessageSeparator, Avatar, Sidebar, Search } from '@chatscope/chat-ui-kit-react';
import { Loading, Separator, BottomInput } from 'Components'
import { useRef, useState, useEffect } from 'react';


// import TextInput from '../TextInput'

export const Chat = ({
  message,
  setMessage,
  conversation,
  setConversation,
  height,
  setSidebarVisible,
  sidebarVisible,
}) => {
    const inputRef = useRef();
    const messageListRef = useRef();
    const [messageLoad, setMessageLoad] = useState("false")
    const [inputDisabled, setInputDisabled] = useState(false)

    const [sidebarStyle, setSidebarStyle] = useState({});

    const handleSend = message => {
      if (message.length===0)
        return
      if (inputDisabled)
        return
      setMessageLoad("true")
      setInputDisabled(true)
      let userMessage = {
        message,
        direction: 'outgoing'
      }
      setConversation([...conversation, userMessage]);
      console.log(JSON.stringify(message));
      let responseMessage
      fetch('http://localhost:5000/text-input', {
        method: 'POST',
        body: JSON.stringify({
            text: message,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
          responseMessage = {
            message: data.fulfillmentText,
            direction: 'incoming',
          }
          setConversation([...conversation, userMessage,  responseMessage])
          setMessageLoad("false")
          setInputDisabled(false)
          inputRef.current.focus();
          localStorage.setItem("conversation0", JSON.stringify([...conversation, userMessage,  responseMessage]));
          
          console.log(data);
         })
         .catch((err) => {
            console.log("eer",err.message);
            console.log(err);
         });
      setMessage("");
      messageListRef.current.scrollToBottom('auto');
      };
    //Hardcoded load
    useEffect(() => {
        const timer = setTimeout(() => {
          setMessageLoad("false")
        }, 5000); //change 5000 to whatever time you want
        return () => clearTimeout(timer);
      }, [messageLoad]);
      useEffect(() => {
        if (sidebarVisible) {
          setSidebarStyle({
            display: "flex",
            flexBasis: "auto",
            width: "40%",
            maxWidth: "40%"
          });
          // setConversationContentStyle({
          //   display: "flex"
          // });
          // setConversationAvatarStyle({
          //   marginRight: "1em"
          // });
          // setChatContainerStyle({
          //   display: "none"
          // });
        } else {
          setSidebarStyle({
            width: "0%",
            maxWidth: "0%",
            color:'green'
          });
          // setConversationContentStyle({});
          // setConversationAvatarStyle({});
          // setChatContainerStyle({});
        }
      }, [sidebarVisible, setSidebarVisible]);
    return(
        <div style={{ position: 'fixed', bottom: 0, width: '100%', height: height - 64, flex:1 }}>
            <MainContainer responsive>
              <Sidebar position="left" scrollable={false} style={sidebarStyle}>
              {/* <Search placeholder="Search..." /> */}
              </Sidebar>
                <ChatContainer>       
                <MessageList scrollBehavior="auto" ref={messageListRef} >
                <MessageSeparator content={Date().toLocaleString()} />
                    {conversation.map((msg, index) =>
                      <Message key={index} model={msg}>
                        <Avatar src={'https://chatscope.io/storybook/react/static/media/joe.641da105.svg'} name={"Zoe"} size="md" />
                      </Message>
                    )}
                    {/* <Avatar src={'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'} name={"Zoe"} size="md" /> */}
                    <Message.ImageContent src={'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600'} width={200} />
                <div as="MessageSeparator">
                    <Loading isvisible={messageLoad} align="left" />
                </div>
                </MessageList>
                <div as="MessageInput" >
                    <BottomInput handleSend={handleSend} message={message} setMessage={setMessage} inputRef={inputRef}  />
                  </div>       
                </ChatContainer>
            </MainContainer>
        </div>
    )
}
