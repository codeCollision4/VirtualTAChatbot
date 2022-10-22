import {IconButton} from '@mui/material';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
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
            <QuestionAnswerRoundedIcon />
        </IconButton>
    )
}