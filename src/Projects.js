import React from 'react'
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import Paper from '@mui/material/Paper';
import dtdt from './dtdt.jpg'
import LogoUC from './LogoUC.PNG'

const Projects = (props) => {
  return (
    !props.darkMode ? 
    <div className='flex flex-col h-[100vh]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#072b57", ":hover": {bgcolor: "#0a52a8"},}}><ArrowBackIcon sx={{color: "#fff"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-black'>Projects</h1>
          <CodeIcon sx={{color: "#34aeeb", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[5vh] h-[40vh] justify-around'>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[10vh] rounded-xl' src={dtdt}/>
            <p className='font-sans text-[4vh] font-normal'>Davis Triceratops</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Mobile Application @ CodeLab</p>
            <p className='text-[2vh]'>(2022-2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh]'>
              <p className='text-[1.9vh]'>● Developed an app used by over 3500 users and a total of 750 triceratop hunts</p>
              <p className='text-[1.9vh]'>● Created backend routes to MongoDB database using express and Axios, implemented google authentication, and used AWS S3 database for images</p>
              <p className='text-[1.9vh]'>● Created front end pages using react native such as the Profile, Login, and Google Maps pages</p>
              <p className='text-[1.9vh]'>● Used Git, Jira Kanban boards, and Notion software to track progress and review code</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[1vh] w-[24vw]'>Skills - React Native, JSON, API Development, Mongoose Web Server, Axios, Express.js, Google authentication, Jira,
Notion Productivity Software, React.js, JavaScript, Cascading Style Sheets (CSS)</p>
          </div>
        </Paper>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src='https://seeklogo.com/images/F/facebook-marketplace-logo-46A976DABC-seeklogo.com.png'/>
            <p className='font-sans text-2xl font-normal'>College Marketplace</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Web Application w/ React.js</p>
            <p className='text-[2vh]'>(Summer 2022)</p>
            </div>
            <div className='w-[23vw] mt-[2vh]'>
              <p className='text-[1.9vh]'>● Built a full-stack e-commerce site for students across 4000 US colleges to transact college essentials</p>
              <p className='text-[1.9vh]'>● Features: posting items; chatting about deals, searching items by institution, price, category, keywords, saving posts, searching, and endorsing posts</p>
              <p className='text-[1.9vh]'>● Used Firebase Cloud and Axios to parse static JSON APIs, such as a list of US Universities</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - react.js, tailwind.css, node.js, firestore, axios, google auth, JSON, Algolia, shell-scripting</p>
          </div>
        </Paper>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src={LogoUC}/>
            <p className='font-sans text-2xl font-normal'>MyUC</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Mobile Application w/ Flutter</p>
            <p className='text-[2vh]'>(Summer 2021)</p>
            </div>
            <div className='w-[23vw] mt-[2vh]'>
              <p className='text-[1.9vh]'>● Developed an android application using Flutter, Firestore, and MySQL technologies</p>
              <p className='text-[1.9vh]'>● Created a efficient matching algorithm to match colleges to certain interests</p>
              <p className='text-[1.9vh]'>● Scripted queries to access and manipulate user data and export applications to large application sites like google play</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - Flutter, Dart, Firebase, Google Auth, MySQL, Java, Mobile Emulator</p>
          </div>
        </Paper>
      </div>
    </div>
    :
    <div className='flex flex-col h-[100vh] bg-[#353c4a]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e6ca43", ":hover": {bgcolor: "#f5cd07"},}}><ArrowBackIcon sx={{color: "#333"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-slate-200'>Projects</h1>
          <CodeIcon sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[5vh] h-[40vh] justify-around'>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[10vh] rounded-xl' src={dtdt}/>
            <p className='font-sans text-[4vh] font-normal'>Davis Triceratops</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium text-[#FFFAF3]'>Mobile Application @ CodeLab</p>
            <p className='text-[2vh] text-[#FFFAF3]'>(2022-2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh]'>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Developed an app used by over 3500 users and a total of 750 triceratop hunts</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Created backend routes to MongoDB database using express and Axios, implemented google authentication, and used AWS S3 database for images</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Created front end pages using react native such as the Profile, Login, and Google Maps pages</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Used Git, Jira Kanban boards, and Notion software to track progress and review code</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[1vh] w-[24vw] text-[#FFFAF3]'>Skills - React Native, JSON, API Development, Mongoose Web Server, Axios, Express.js, Google authentication, Jira,
Notion Productivity Software, React.js, JavaScript, Cascading Style Sheets (CSS)</p>
          </div>
        </Paper>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src='https://seeklogo.com/images/F/facebook-marketplace-logo-46A976DABC-seeklogo.com.png'/>
            <p className='font-sans text-2xl font-normal'>College Marketplace</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium text-[#FFFAF3]'>Web Application w/ React.js</p>
            <p className='text-[2vh] text-[#FFFAF3]'>(Summer 2022)</p>
            </div>
            <div className='w-[23vw] mt-[2vh]'>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Built a full-stack e-commerce site for students across 4000 US colleges to transact college essentials</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Features: posting items; chatting about deals, searching items by institution, price, category, keywords, saving posts, searching, and endorsing posts</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Used Firebase Cloud and Axios to parse static JSON APIs, such as a list of US Universities</p>
            </div>
            <p className='text-[1.5vh] text-[#FFFAF3] font-thin mt-[3vh] w-[24vw]'>Skills - react.js, tailwind.css, node.js, firestore, axios, google auth, JSON, Algolia, shell-scripting</p>
          </div>
        </Paper>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src={LogoUC}/>
            <p className='font-sans text-2xl font-normal'>MyUC</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium text-[#FFFAF3]'>Mobile Application w/ Flutter</p>
            <p className='text-[2vh] text-[#FFFAF3]'>(Summer 2021)</p>
            </div>
            <div className='w-[23vw] mt-[2vh]'>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Developed an android application using Flutter, Firestore, and MySQL technologies</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Created a efficient matching algorithm to match colleges to certain interests</p>
              <p className='text-[1.9vh] text-[#FFFAF3]'>● Scripted queries to access and manipulate user data and export applications to large application sites like google play</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw] text-[#FFFAF3]'>Skills - Flutter, Dart, Firebase, Google Auth, MySQL, Java, Mobile Emulator</p>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default Projects