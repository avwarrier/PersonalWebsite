import React from 'react'
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';

const Skills = (props) => {
  return (
    !props.darkMode ? 
    <div className='flex flex-col h-[100vh]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#072b57", ":hover": {bgcolor: "#0a52a8"},}}><ArrowBackIcon sx={{color: "#fff"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-black'>Skills</h1>
          <OfflineBoltIcon sx={{color: "#34aeeb", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[10vh] h-[40vh] justify-around'>
        <Paper  elevation={3} className='h-[69vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh]'>Progamming Languages</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[3.5vw] drop-shadow-md' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png'/>
                <h1 className='font-light text-xl'>Java</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'/>
                <h1 className='font-light text-xl'>C</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://logosdownload.com/logo/javascript-logo-big.png'/>
                <h1 className='font-light text-xl'>Javascript</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png'/>
                <h1 className='font-light text-xl'>HTML</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://res.cloudinary.com/practicaldev/image/fetch/s--oauuL7zA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/42f5tyuwirjrc9v7scct.png'/>
                <h1 className='font-light text-xl'>Kotlin</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'/>
                <h1 className='font-light text-xl'>Python</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'/>
                <h1 className='font-light text-xl'>C++</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png'/>
                <h1 className='font-light text-xl'>Dart</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'/>
                <h1 className='font-light text-xl'>CSS</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'/>
                <h1 className='font-light text-xl'>SQL</h1>
              </div>
              
            </div>
          </div>
        </Paper>
        <Paper  elevation={3} className='h-[69vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh]'>Frameworks</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                <h1 className=' font-light text-xl'>React.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'/>
                <h1 className='font-light text-xl'>Tailwind.css</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'/>
                <h1 className='font-light text-xl'>Express.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3DiMTwcttkIapZNj9wtG8D1iu50Z3VxGvoM_6FIV5vURhRpfvBkAlX8XPA1y_W6BEQ8&usqp=CAU'/>
                <h1 className='font-light text-xl'>Django</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png'/>
                <h1 className='font-light text-xl'>Firebase</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png'/>
                <h1 className=' font-light text-xl'>Node.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png'/>
                <h1 className='font-light text-xl'>Flutter</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://youteam.io/blog/wp-content/uploads/2021/11/react-native-logo.png'/>
                <h1 className='font-light text-xl'>React Native</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'/>
                <h1 className='font-light text-xl'>mongoDB</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'/>
                <h1 className='font-light text-xl'>Typescript</h1>
              </div>
            </div>
          </div>
        </Paper>
        <Paper  elevation={3} className='h-[69vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh]'>Workflow</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'/>
                <h1 className=' font-light text-xl'>Git</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png'/>
                <h1 className='font-light text-xl'>GoogleCloud</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'/>
                <h1 className='font-light text-xl'>Notion</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://allinone-academy.com/images/course/SQL_Academy.png'/>
                <h1 className='font-light text-xl'>MySQL</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://miro.medium.com/v2/resize:fit:500/1*AbiX4LwtSNozoyfypcKvEg.png'/>
                <h1 className='font-light text-xl'>Springboot</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png'/>
                <h1 className=' font-light text-xl'>Jira</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://seeklogo.com/images/E/expo-go-app-logo-BBBE394CB8-seeklogo.com.png'/>
                <h1 className='font-light text-xl'>Expo</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/algolia-icon.png'/>
                <h1 className='font-light text-xl'>Algolia</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png'/>
                <h1 className='font-light text-xl'>AWS</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png'/>
                <h1 className='font-light text-xl'>PostgreSQL</h1>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
    :
    <div className='flex flex-col h-[100vh] bg-[#353c4a]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
      <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e6ca43", ":hover": {bgcolor: "#f5cd07"},}}><ArrowBackIcon sx={{color: "#333"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-slate-200'>Skills</h1>
          <OfflineBoltIcon sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[10vh] h-[40vh] justify-around'>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[69vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh] text-slate-200'>Progamming Languages</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[3.5vw] drop-shadow-md' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png'/>
                <h1 className='font-light text-xl'>Java</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'/>
                <h1 className='font-light text-xl'>C</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://logosdownload.com/logo/javascript-logo-big.png'/>
                <h1 className='font-light text-xl'>Javascript</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png'/>
                <h1 className='font-light text-xl'>HTML</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://res.cloudinary.com/practicaldev/image/fetch/s--oauuL7zA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/42f5tyuwirjrc9v7scct.png'/>
                <h1 className='font-light text-xl'>Kotlin</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'/>
                <h1 className='font-light text-xl'>Python</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'/>
                <h1 className='font-light text-xl'>C++</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png'/>
                <h1 className='font-light text-xl'>Dart</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'/>
                <h1 className='font-light text-xl'>CSS</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'/>
                <h1 className='font-light text-xl'>SQL</h1>
              </div>
            </div>
          </div>
        </Paper>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[69vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh] text-slate-200'>Frameworks</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                <h1 className=' font-light text-xl'>React.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'/>
                <h1 className='font-light text-xl'>Tailwind.css</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'/>
                <h1 className='font-light text-xl'>Express.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3DiMTwcttkIapZNj9wtG8D1iu50Z3VxGvoM_6FIV5vURhRpfvBkAlX8XPA1y_W6BEQ8&usqp=CAU'/>
                <h1 className='font-light text-xl'>Django</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png'/>
                <h1 className='font-light text-xl'>Firebase</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png'/>
                <h1 className=' font-light text-xl'>Node.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png'/>
                <h1 className='font-light text-xl'>Flutter</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://youteam.io/blog/wp-content/uploads/2021/11/react-native-logo.png'/>
                <h1 className='font-light text-xl'>React Native</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'/>
                <h1 className='font-light text-xl'>mongoDB</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'/>
                <h1 className='font-light text-xl'>Typescript</h1>
              </div>
            </div>
          </div>
        </Paper>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[69vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh] text-slate-200'>Workflow</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'/>
                <h1 className=' font-light text-xl'>Git</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png'/>
                <h1 className='font-light text-xl'>GoogleCloud</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'/>
                <h1 className='font-light text-xl'>Notion</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://allinone-academy.com/images/course/SQL_Academy.png'/>
                <h1 className='font-light text-xl'>MySQL</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://miro.medium.com/v2/resize:fit:500/1*AbiX4LwtSNozoyfypcKvEg.png'/>
                <h1 className='font-light text-xl'>Springboot</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png'/>
                <h1 className=' font-light text-xl'>Jira</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://seeklogo.com/images/E/expo-go-app-logo-BBBE394CB8-seeklogo.com.png'/>
                <h1 className='font-light text-xl'>Expo</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/algolia-icon.png'/>
                <h1 className='font-light text-xl'>Algolia</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png'/>
                <h1 className='font-light text-xl'>AWS</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png'/>
                <h1 className='font-light text-xl'>PostgreSQL</h1>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default Skills