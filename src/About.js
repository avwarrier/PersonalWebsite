import React from 'react'
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Abhimanyu_Warrier from './Abhimanyu_Warrier.jpg'

const About = (props) => {
  return (
    !props.darkMode ? 
    <div className='flex flex-col h-[99vh] mt-[1vh]'>
      <div className='flex justify-between items-center h-[60px]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#072b57", ":hover": {bgcolor: "#0a52a8"},}}><ArrowBackIcon sx={{color: "#fff"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-black'>About Me!</h1>
        </div>
      </div>
      <div className='flex mt-[5vh] h-[40vh] justify-center'>
        <Paper  elevation={3} className='h-[65vh] w-[60vw] flex items-center justify-around'>
          <img alt='img' className='h-[50vh] rounded-xl shadow-md' src={Abhimanyu_Warrier}/>
          <div className='h-[50vh] w-[35vw] flex-col justify-around'>
            <h1 className='text-[2.7vh]'>Hey, I'm a passionate Computer Science student at UC Davis. I have lots of experience in fields of Computer Science including machine learning, AI, app dev, and web development which I gained through personal projects, internships, and research positions. Outside of academics, I like to play basketball, and many instruments including the Indian Carnatic Violin, Flute, Tenor Saxophone, and Bass Clarinet.
            </h1>
            <h1 className='mt-[5vh] text-[2.7vh]'>I am always interested in learning more and I am open to working at internships and on projects. Feel free to reach out!</h1>
          </div>
        </Paper>
        
      </div>
    </div>
    :
    <div className='flex flex-col h-[100vh] bg-[#353c4a]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
      <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e6ca43", ":hover": {bgcolor: "#f5cd07"},}}><ArrowBackIcon sx={{color: "#333"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-white'>About Me!</h1>
        </div>
      </div>
      <div className='flex mt-[5vh] h-[40vh] justify-center'>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[65vh] w-[60vw] flex items-center justify-around'>
          <img alt='img' className='h-[50vh] rounded-xl shadow-md' src={Abhimanyu_Warrier}/>
          <div className='h-[50vh] w-[35vw] flex-col justify-around'>
            <h1 className='text-md text-slate-200'>Hey, I'm a passionate Computer Science student at UC Davis. I have lots of experience in fields of Computer Science including machine learning, AI, app dev, and web development which I gained through personal projects, internships, and research positions. Outside of academics, I like to play basketball, and many instruments including the Indian Carnatic Violin, Flute, Tenor Saxophone, and Bass Clarinet.
            </h1>
            <h1 className='mt-[5vh] text-slate-200'>I am always interested in learning more and I am open to working at internships and on projects. Feel free to reach out!</h1>
          </div>
        </Paper>
        
      </div>
    </div>
  )
}

export default About