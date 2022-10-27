import {IconButton} from '@mui/material';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
// import React,{useState} from 'react'
export const SidebarButton = ({setSidebarVisible, sidebarVisible}) => {
    const sidebarClick = () => {
        setSidebarVisible(sidebarVisible => !sidebarVisible)
    }
    return (
        <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={sidebarClick}
            sx={{ mr: 2 }}
          >
            <QuestionAnswerOutlinedIcon />
        </IconButton>
    )
}