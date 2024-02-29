import React from 'react'
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Home = (props) => {


  return (
    !props.darkMode ? 
    <div className=' bg-white h-[100vh] flex-col'>
        <div className='h-[40vh] flex items-center justify-around'>
        <Paper sx={{backgroundColor: "#fff", borderRadius: 2}} elevation={3} className='mt-[16vh] ml-[5vw] h-[35vh] w-[40vw] p-[2vw] flex flex-col'>
            <h1 className='font-sans text-[4.7vh] mx-auto text-black w-[32vw] font-medium'>Welcome to my website!</h1>
            <div className='mx-auto w-[32vw] mt-[2vh]'><h1 className=' text-slate-600'>Hi, my name is Abhimanyu Warrier and I am a second year computer science student with senior standing at UC Davis!</h1><h1 className=' text-slate-600 font-light text-xs'>Made in React.js</h1></div>
            <div className='mx-auto w-[32vw] mt-[2vh]'>
                <Link to="/about"><Button variant='contained' sx={{bgcolor: "#083361", borderRadius: 5, height: "7vh", width: "9vw", textTransform: "none"}}>About Me</Button></Link>
            </div>
        </Paper>
        <img alt='img' className=' h-[60vh] mt-[16vh]' src='https://i-tea.com.my/assets/template/com_template/images/slider/digital-solution.png?v=0.05'></img>
        </div>
        <div className='flex h-[30vh] mt-[20vh] justify-center gap-[6vw]'>
            <Link to="/skills"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:bg-[#266a99]'>
                <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Skills</h1>
                    <OfflineBoltIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
                
            </Paper>
            </Link>
            <Link to="/projects"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:bg-[#266a99]'>
            <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Projects</h1>
                    <CodeIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
            </Paper>
            </Link>
            <Link to="/experience"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:bg-[#266a99]'>
            <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Experience</h1>
                    <AccessTimeFilledIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
            </Paper>
            </Link>
        </div>
    </div>
    :
    <div className=' bg-[#353c4a] h-[100vh] flex-col'>
        <div className='h-[40vh] flex items-center justify-around'>
        <Paper sx={{backgroundColor: "#353c4a", borderRadius: 2}} elevation={3} className='mt-[16vh] ml-[5vw] h-[35vh] w-[40vw] p-[2vw] flex flex-col '>
            <h1 className='font-sans text-[4.7vh] mx-auto text-white w-[32vw] font-medium'>Welcome to my website!</h1>
            <div className='mx-auto w-[32vw] mt-[2vh]'><h1 className=' text-slate-400'>Hi, my name is Abhimanyu Warrier and I am a second year computer science student with senior standing at UC Davis!</h1><h1 className=' text-slate-500 text-xs font-light'>Made in React.js</h1></div>
            <div className='mx-auto w-[32vw] mt-[2vh]'>
                <Link to="/about"><Button variant='contained' sx={{backgroundColor: "#e6ca43", ":hover": {bgcolor: "#f5cd07"}, borderRadius: 5, height: "7vh", width: "9vw", textTransform: "none"}}>About Me</Button></Link>
            </div>
        </Paper>
        <img alt='img' className=' h-[60vh] mt-[16vh]' src='https://i-tea.com.my/assets/template/com_template/images/slider/digital-solution.png?v=0.05'></img>
        </div>
        <div className='flex h-[30vh] mt-[20vh] justify-center gap-[6vw]'>
            <Link to="/skills"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:bg-[#f2d755]'>
                <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Skills</h1>
                    <OfflineBoltIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
                
            </Paper>
            </Link>
            <Link to="/projects"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:bg-[#f2d755]'>
            <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Projects</h1>
                    <CodeIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
            </Paper>
            </Link>
            <Link to="/experience"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:bg-[#f2d755]'>
            <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Experience</h1>
                    <AccessTimeFilledIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
            </Paper>
            </Link>
        </div>
    </div>
  )
}

export default Home