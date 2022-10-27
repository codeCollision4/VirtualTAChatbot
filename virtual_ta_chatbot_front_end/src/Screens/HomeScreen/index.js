import React, { useState, useEffect } from 'react';
import style from './style.css'
import {Header, Chat, TextInput} from 'Components'
//Chatbot main screen
const HomeScreen = ({themeNumber, setThemeNumber}) => {
    //How far back the history should go, just change the number
    const MAX_HISTORY = 5
    const [message, setMessage] = useState('')
    const [memoryNum, setMemoryNum] = useState(0)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [conversation, setConversation] = useState([
        {
            message: "Hello, I am your vitual TA!",
            sender: "Joe",
            direction: 'incoming',
        },
    ])
    const [memory, setMemory] = useState(() => {
      let saved //= null
      let finalMem = []
      for (let i = 0; i < MAX_HISTORY; i++) {
        let value = localStorage.getItem("conversation" + i);
        saved = localStorage.getItem("conversation" + i)
        let initialValue = JSON.parse(saved);
        finalMem.push(initialValue)
      }

      return finalMem
    })

  useEffect(() => {
    function handleWindowResize() {setWindowSize(getWindowSize());}
    window.addEventListener('resize', handleWindowResize);
    return () => {window.removeEventListener('resize', handleWindowResize);};
    }, []);
    /*
    Moves all history up by one

    */
    useEffect(() => {
      if (memory !== null) {
        for (let i=MAX_HISTORY - 1; i >= 0; i--){
          let iSmall = i - 1
          localStorage.setItem("conversation" + i, (localStorage.getItem("conversation" + iSmall)))
        }
      }
    }, [memory]);
    //For testing purposes
    // useEffect(() => {
    //   for (let i = 0; i < MAX_HISTORY; i++) {
    //     console.log("log",JSON.stringify(localStorage.getItem("conversation" + i)));
    //   }
    // }, [conversation]);
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }  
    return (
        <div clasname="Main">
            <Header
            title="Virtual TA" 
            themeNumber={themeNumber}
            setThemeNumber={setThemeNumber}
            memory={memory}
            setConversation={setConversation}
            setSidebarVisible={setSidebarVisible}
            sidebarVisible={sidebarVisible}
            />
            <Chat
                message={message}
                setMessage={setMessage}
                conversation={conversation}
                setConversation={setConversation}
                height={windowSize.innerHeight}
                setSidebarVisible={setSidebarVisible}
                sidebarVisible={sidebarVisible}
                />
        </div>
    )
}
export default HomeScreen