import {Sidebar, ExpansionPanel  } from '@chatscope/chat-ui-kit-react';
import {Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React,{useState} from 'react'
import SidebarContent from 'Assets/SidebarContent.json'

export const SidebarSection = ({sidebarStyle, setMessage}) => {
    const theme = useTheme();
    const buttonStyle = {
        width:'100%',
        justifyContent: "flex-start",
        textAlign:'left',
        flex:0,
        textTransform: 'none',
        color: theme.palette.text.primary
    }
    return(
        <Sidebar position="left" scrollable={false} style={sidebarStyle}>
            {SidebarContent.QuestionsList.map((content, index) =>
                    <ExpansionPanel key={index} open={false} title={content.title}>
                        {content.questions.map((question, indexx) =>
                            <Button  key={indexx} style={buttonStyle} onClick={() => setMessage(question)}>{question}</Button>
                            // <Link style={buttonStyle} color="primary" onClick={() => setMessage(question)}>{question}{"\n"}</Link>
                        )}
                    </ExpansionPanel>
                    // <div style={{marginTop:10}} />
            )}
        </Sidebar>
    )
}