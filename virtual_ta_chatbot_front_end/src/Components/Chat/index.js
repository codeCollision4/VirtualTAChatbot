import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

export const Chat = () => {
    return(
        <div style={{ position: 'fixed', bottom: 0, width: '100%', flex:1 }}>
            <MainContainer>
                <ChatContainer>       
                <MessageList>
                    <Message model={{
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe"
                            }} />
                    <Message model={{
                            message: "Hi",
                            sentTime: "just now",
                            sender: "Jill",
                            direction: "outgoing",
                            }} />
                    <Message model={{
                            message: "What's Up",
                            sentTime: "just now",
                            sender: "Joe"
                            }} />
                    <Message model={{
                            message: "Nothing Much",
                            sentTime: "just now",
                            direction: "outgoing",
                            sender: "Jill"
                            }} />
                    </MessageList>
                <MessageInput placeholder="Type message here" />        
                </ChatContainer>
            </MainContainer>
        </div>
    )
}