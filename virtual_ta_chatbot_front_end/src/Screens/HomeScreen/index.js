import React, { useState } from 'react';
import style from './style.css'
import {Header, Chat, TextInput} from 'Components'

//Chatbot main screen
const HomeScreen = () => {
    const [message, setMessage] = useState('')
    const [conversation, setConversation] = useState([
        {
            message: "Hello, I am your vitual TA!",
            sender: "Joe",
            direction: 'incoming',
        },
        // {
        //     message: "Hello my friend",
        //     sender: "Joe",
        //     direction: 'outgoing',
        // },
    ])
    
    return (
        <div clasname="Main">
            <Header title="Virtual TA" />
            <Chat message={message} setMessage={setMessage} conversation={conversation} setConversation={setConversation} />
        </div>
    )
}
export default HomeScreen