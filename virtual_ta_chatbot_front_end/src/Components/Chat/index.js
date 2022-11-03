import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Loader, MessageSeparator, Avatar, Sidebar, Search } from '@chatscope/chat-ui-kit-react';
import { Loading, Separator, BottomInput, SidebarSection } from 'Components'
import { useRef, useState, useEffect } from 'react';
import { flatten } from 'flatten-anything'
// import _ from 'lodash'

// import TextInput from '../TextInput'

export const Chat = ({
  message,
  setMessage,
  conversation,
  setConversation,
  height,
  setSidebarVisible,
  sidebarVisible,
  showSnackFunc
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
      let responseMessage = [...conversation]
      responseMessage.push(userMessage)
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
          data.fulfillmentMessages.map((msg, index) => {
            responseMessage.push(parseMessage(msg))
          })
          setConversation([...responseMessage  ])
          setMessageLoad("false")
          setInputDisabled(false)
          inputRef.current.focus();
          localStorage.setItem("conversation0", JSON.stringify([...responseMessage  ]));
        })
        .catch((err) => {
          console.log("eer",err.message);
          console.log(err);
        });
      setMessage("");
      messageListRef.current.scrollToBottom('auto');
      };
    const parseMessage = (msg) => {
      let responseMessage
      if (msg.message==='text'){
        let fullmessage = ""
        msg.text.text.map((txt) => fullmessage += (txt + "\n") )
        return (responseMessage={
          message: fullmessage,
          direction: 'incoming',
        })
      }
      else if (msg.message==='payload') {
        let json = JSON.stringify(msg)
        let text = json.split("\"rawUrl\":{\"stringValue\":\"")[1]
        if (text===undefined){
          return (responseMessage = {
            message: "Not Working Yet",
            direction: 'incoming',
          })
        }
        text = text.split("\"")[0]
        return (responseMessage = {
          message: text,
          direction: 'incoming',
          type: 'image'
        })
      }
    }
    //Hardcoded load
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setMessageLoad("false")
    //     }, 5000); //change 5000 to whatever time you want
    //     return () => clearTimeout(timer);
    //   }, [messageLoad]);
      useEffect(() => {
        if (sidebarVisible) {
          setSidebarStyle({
            display: "flex",
            // flexBasis: "auto",
            width: "100%",
            // width: "40%",
            // maxWidth: "40%"
          });
        } else {
          setSidebarStyle({
            width: "0%",
            maxWidth: "0%",
          });
          // setConversationContentStyle({});
          // setConversationAvatarStyle({});
          // setChatContainerStyle({});
        }
      }, [sidebarVisible, setSidebarVisible]);
    return(
        <div style={{ position: 'fixed', bottom: 0, width: '100%', height: height - 64, flex:1 }}>
            <MainContainer responsive>
                <SidebarSection sidebarStyle={sidebarStyle} setMessage={setMessage} />
                <ChatContainer>       
                  <MessageList scrollBehavior="auto" ref={messageListRef} >
                  <MessageSeparator content={Date().toLocaleString()} />
                    {conversation.map((msg, index) =>
                      <Message key={index} model={msg}>
                        {msg.direction==='incoming' ?
                          <Avatar src={'https://chatscope.io/storybook/react/static/media/joe.641da105.svg'} name={"Zoe"} size="md" />
                          : null
                        }
                        {msg?.type==='image' ?
                        <Message.ImageContent src={msg.message} width={200} />
                        : null
                        }
                        </Message>
                    )}
                  <div as="MessageSeparator">
                      <Loading isvisible={messageLoad} align="left" />
                  </div>
                  </MessageList>
                  <div as="MessageInput" >
                    <BottomInput handleSend={handleSend} message={message} setMessage={setMessage} inputRef={inputRef}
                    showSnackFunc={showSnackFunc} />
                  </div>       
                </ChatContainer>
            </MainContainer>
        </div>
    )
}
