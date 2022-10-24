import {Sidebar, ExpansionPanel  } from '@chatscope/chat-ui-kit-react';
import React,{useState} from 'react'

export const SidebarSection = ({sidebarStyle}) => {
    return(
        <Sidebar position="left" scrollable={false} style={sidebarStyle}>
        </Sidebar>
    )
}