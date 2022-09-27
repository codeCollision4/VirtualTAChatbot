// import React, { useState } from 'react';
import style from './style.css'
import {Header, Chat} from 'Components'

//Chatbot main screen
const HomeScreen = () => {
    
    return (
        <div clasname="Main">
            <Header title="Virtual TA" />
            <Chat />
        </div>
    )
}
export default HomeScreen