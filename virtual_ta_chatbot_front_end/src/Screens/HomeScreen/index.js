import React, { useState, useEffect } from 'react';
import style from './style.css'
import {Header, Chat, TextInput} from 'Components'
import { useTheme } from '@material-ui/styles';

//Chatbot main screen
const HomeScreen = ({themeNumber, setThemeNumber}) => {
    const theme = useTheme();
    const [message, setMessage] = useState('')
    const [conversation, setConversation] = useState([
        {
            message: "Hello, I am your vitual TA!",
            sender: "Joe",
            direction: 'incoming',
        },
    ])
    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    }, []);
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }  
    
    return (
        <div clasname="Main">
            <Header title="Virtual TA" themeNumber={themeNumber} setThemeNumber={setThemeNumber}/>
            <Chat
                message={message}
                setMessage={setMessage}
                conversation={conversation}
                setConversation={setConversation}
                height={windowSize.innerHeight}
                />
        </div>
    )
}
export default HomeScreen