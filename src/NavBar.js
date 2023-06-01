import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    !props.darkMode ?
    <div className=' drop-shadow-lg bg-white h-[80px] flex justify-between items-center'>
        <div>
        
          <h1 className=' font-sans text-black text-2xl font-medium ml-[5vw]'>Abhimanyu Warrier</h1>
        </div>
        <div className='flex items-center gap-[20px]'>
        
        <IconButton onClick={() => props.setDarkMode(true)}><ModeNightIcon sx={{fontSize: 30, color: "#447fc7"}}/></IconButton> 
        
        <div className='w-[20vw] bg-blue-950 mr-[5vw] flex justify-around shadow-lg rounded-lg'>
            <a href='https://www.instagram.com/_abhimanyuw_/' target='_blank'><IconButton ><InstagramIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
            <a href='http://www.linkedin.com/in/abhimanyu-warrier' target='_blank'><IconButton ><LinkedInIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
            <a href='https://www.instagram.com/_abhimanyuw_/' target='_blank'><IconButton ><GitHubIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
        </div>
        </div>
    </div>
    :
    <div className=' drop-shadow-lg bg-[#353c4a] h-[80px] flex justify-between items-center'>
        <h1 className=' font-sans text-white text-2xl font-medium ml-[5vw]'>Abhimanyu Warrier</h1>
        <div className='flex items-center gap-[20px]'>
        
        <IconButton onClick={() => props.setDarkMode(false)}><Brightness5Icon sx={{fontSize: 30, color: "#ebd82f"}}/></IconButton>
        
        <div className='w-[20vw] bg-amber-400 mr-[5vw] flex justify-around shadow-lg rounded-lg'>
            <a href='https://www.instagram.com/_abhimanyuw_/' target='_blank'><IconButton ><InstagramIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
            <a href='http://www.linkedin.com/in/abhimanyu-warrier' target='_blank'><IconButton ><LinkedInIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
            <a href='https://www.instagram.com/_abhimanyuw_/' target='_blank'><IconButton ><GitHubIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
        </div>
        </div>
    </div>
    
  )
}

export default NavBar