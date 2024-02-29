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
    <div className='flex flex-col h-[160vh]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#072b57", ":hover": {bgcolor: "#0a52a8"},}}><ArrowBackIcon sx={{color: "#fff"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-black'>Projects</h1>
          <CodeIcon sx={{color: "#34aeeb", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex flex-col mt-[5vh] h-[40vh] '>
      <div className='flex justify-around'>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[10vh] rounded-xl' src="https://images.ctfassets.net/bx9krvy0u3sx/3Gffni62GJZmC9ocHoRI9e/11b567266f04cbe3d24bc73f67771dd7/truckpedia.png"/>
            <p className='font-sans text-[3vh] font-normal'>Truckpedia</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[3vh] font-medium'>Mobile App Developer</p>
            <p className='text-[2vh]'>(Sept 2023 - Dec 2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Worked on developing a mobile version of the Truckpedia Web Application as part of a project with CodeLab UC Davis
</p>
              <p className=''>● Built multiple screens to align with predetermined Figma designs in react native and put them together with a navigation bar</p>
              <p className=''>● Worked to implement backend routes and get/post data from the company's database and used them to populate our screens
</p>
              <p className=''>● Put together a functioning application with a simple user flow and backend integration</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[1.5vh] w-[24vw]'>Skills - Typescript, Rest APIs, React Native, Javascript, HTML, CSS, JSON, Postman, Fullstack SWE
</p>
          </div>
        </Paper>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[7vh] rounded-xl' src='https://seeklogo.com/images/G/google-developers-logo-3FB15D7DCE-seeklogo.com.png'/>
            <a href="https://mesha-7d338.web.app/#" target='_blank' className='font-sans text-2xl font-normal text-[#1e3c87] underline'>Mesha Productivity Master</a>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[3vh] font-medium'>Solo Web Application</p>
            <p className='text-[2vh]'>(Summer 2023)</p>
          </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Developed a web application that streamlines productivity through the use of a Binder, a file structure like system in order to arrange projects, classes, or files while being able to edit/track progress
</p>
              <p className=''>● Created a React.js frontend using a firestore database which integrates a nested collection structure
</p>
              <p className=''>● Built the ability to use due dates, large file hierarchies, color-coded classes, progress trackers, comment system, note-taking framework (quill)
</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - React.js, Node.js, Firebase, Firestore, Tailwind.css, Quill Editor, Collections, dnd-kit, React DND</p>
          </div>
        </Paper>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png"/>
          <a href="https://github.com/avwarrier/PhoneBook" target='_blank' className='font-sans text-3xl font-normal text-[#1e3c87] underline'>Phonebook</a>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[3vh] font-medium'>SQL Demonstration</p>
            <p className='text-[2vh]'>(August 2023 - Sept 2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Built a simple tool to demonstrate MySQL proficiency and ability to use SQL databases in fullstack apps</p>
              <p className=''>● Features: addition of users with fields: name, phone, email, setting certain users as priority, and deletion
</p>
              <p className=''>● Used a react.js and Tailwind.css frontend with a Node.js backend using express.js and axios to connect to the SQL database and create API routes such as add, delete, and update certain users
</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - React.js, Tailwind.css, Node.js, MySQL, SQL, Axios, Express.js, Databases</p>
          </div>
        </Paper>
        </div>
        <div className='flex mt-[5vh] justify-around'>
        <Paper  elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[10vh] rounded-xl' src={dtdt}/>
            <p className='font-sans text-[3vh] font-normal'>Davis Triceratops</p>
          </div>
          <div className='w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Mobile Application @ CodeLab</p>
            <p className='text-[2vh]'>(2022-2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Developed an app used by over 3500 users and a total of 750 triceratop hunts</p>
              <p className=''>● Created backend routes to MongoDB database using express and Axios, implemented google authentication, and used AWS S3 database for images</p>
              <p className=''>● Created front end pages using react native such as the Profile, Login, and Google Maps pages</p>
              <p className=''>● Used Git, Jira Kanban boards, and Notion software to track progress and review code</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[1.5vh] w-[24vw]'>Skills - React Native, JSON, API Development, Mongoose Web Server, Axios, Express.js, Google authentication, Jira,
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
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Built a full-stack e-commerce site for students across 4000 US colleges to transact college essentials</p>
              <p className=''>● Features: posting items; chatting about deals, searching items by institution, price, category, keywords, saving posts, searching, and endorsing posts</p>
              <p className=''>● Used Firebase Cloud and Axios to parse static JSON APIs, such as a list of US Universities</p>
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
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Developed an android application using Flutter, Firestore, and MySQL technologies</p>
              <p className=''>● Created a efficient matching algorithm to match colleges to certain interests</p>
              <p className=''>● Scripted queries to access and manipulate user data and export applications to large application sites like google play</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - Flutter, Dart, Firebase, Google Auth, MySQL, Java, Mobile Emulator</p>
          </div>
        </Paper>
        </div>
      </div>
    </div>
    :
    <div className='flex flex-col h-[160vh] bg-[#353c4a]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e6ca43", ":hover": {bgcolor: "#f5cd07"},}}><ArrowBackIcon sx={{color: "#333"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-slate-200'>Projects</h1>
          <CodeIcon sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex flex-col mt-[5vh] h-[40vh] '>
      <div className='flex justify-around'>
        <Paper sx={{backgroundColor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[10vh] rounded-xl' src="https://images.ctfassets.net/bx9krvy0u3sx/3Gffni62GJZmC9ocHoRI9e/11b567266f04cbe3d24bc73f67771dd7/truckpedia.png"/>
            <p className='font-sans text-[3vh] font-normal'>Truckpedia</p>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[3vh] font-medium'>Mobile App Developer</p>
            <p className='text-[2vh]'>(Sept 2023 - Dec 2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Worked on developing a mobile version of the Truckpedia Web Application as part of a project with CodeLab UC Davis
</p>
              <p className=''>● Built multiple screens to align with predetermined Figma designs in react native and put them together with a navigation bar</p>
              <p className=''>● Worked to implement backend routes and get/post data from the company's database and used them to populate our screens
</p>
              <p className=''>● Put together a functioning application with a simple user flow and backend integration</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[1.5vh] w-[24vw]'>Skills - Typescript, Rest APIs, React Native, Javascript, HTML, CSS, JSON, Postman, Fullstack SWE
</p>
          </div>
        </Paper>
        <Paper sx={{backgroundColor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[7vh] rounded-xl' src='https://seeklogo.com/images/G/google-developers-logo-3FB15D7DCE-seeklogo.com.png'/>
            <a href="https://mesha-7d338.web.app/#" target='_blank' className='font-sans text-2xl font-normal text-[#1e3c87] underline'>Mesha Productivity Master</a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[3vh] font-medium'>Solo Web Application</p>
            <p className='text-[2vh]'>(Summer 2023)</p>
          </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Developed a web application that streamlines productivity through the use of a Binder, a file structure like system in order to arrange projects, classes, or files while being able to edit/track progress
</p>
              <p className=''>● Created a React.js frontend using a firestore database which integrates a nested collection structure
</p>
              <p className=''>● Built the ability to use due dates, large file hierarchies, color-coded classes, progress trackers, comment system, note-taking framework (quill)
</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - React.js, Node.js, Firebase, Firestore, Tailwind.css, Quill Editor, Collections, dnd-kit, React DND</p>
          </div>
        </Paper>
        <Paper sx={{backgroundColor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png"/>
          <a href="https://github.com/avwarrier/PhoneBook" target='_blank' className='font-sans text-3xl font-normal text-[#1e3c87] underline'>Phonebook</a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[3vh] font-medium'>SQL Demonstration</p>
            <p className='text-[2vh]'>(August 2023 - Sept 2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Built a simple tool to demonstrate MySQL proficiency and ability to use SQL databases in fullstack apps</p>
              <p className=''>● Features: addition of users with fields: name, phone, email, setting certain users as priority, and deletion
</p>
              <p className=''>● Used a react.js and Tailwind.css frontend with a Node.js backend using express.js and axios to connect to the SQL database and create API routes such as add, delete, and update certain users
</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - React.js, Tailwind.css, Node.js, MySQL, SQL, Axios, Express.js, Databases</p>
          </div>
        </Paper>
        </div>
        <div className='flex mt-[5vh] justify-around'>
        <Paper sx={{backgroundColor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[10vh] rounded-xl' src={dtdt}/>
            <p className='font-sans text-[3vh] font-normal'>Davis Triceratops</p>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Mobile Application @ CodeLab</p>
            <p className='text-[2vh]'>(2022-2023)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Developed an app used by over 3500 users and a total of 750 triceratop hunts</p>
              <p className=''>● Created backend routes to MongoDB database using express and Axios, implemented google authentication, and used AWS S3 database for images</p>
              <p className=''>● Created front end pages using react native such as the Profile, Login, and Google Maps pages</p>
              <p className=''>● Used Git, Jira Kanban boards, and Notion software to track progress and review code</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[1.5vh] w-[24vw]'>Skills - React Native, JSON, API Development, Mongoose Web Server, Axios, Express.js, Google authentication, Jira,
Notion Productivity Software, React.js, JavaScript, Cascading Style Sheets (CSS)</p>
          </div>
        </Paper>
        <Paper sx={{backgroundColor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src='https://seeklogo.com/images/F/facebook-marketplace-logo-46A976DABC-seeklogo.com.png'/>
            <p className='font-sans text-2xl font-normal'>College Marketplace</p>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Web Application w/ React.js</p>
            <p className='text-[2vh]'>(Summer 2022)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Built a full-stack e-commerce site for students across 4000 US colleges to transact college essentials</p>
              <p className=''>● Features: posting items; chatting about deals, searching items by institution, price, category, keywords, saving posts, searching, and endorsing posts</p>
              <p className=''>● Used Firebase Cloud and Axios to parse static JSON APIs, such as a list of US Universities</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - react.js, tailwind.css, node.js, firestore, axios, google auth, JSON, Algolia, shell-scripting</p>
          </div>
        </Paper>
        <Paper sx={{backgroundColor: "#353c4a"}} elevation={3} className='h-[67vh] w-[30vw] flex flex-col items-center'>
        <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#FFFAF3] p-2 w-[30vw] justify-center rounded-md shadow-md'>
          <img alt='img' className='h-[8vh] rounded-xl' src={LogoUC}/>
            <p className='font-sans text-2xl font-normal'>MyUC</p>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] rounded-md shadow-md p-2 flex-col flex items-center'>
          <div className='flex-col flex justify-center'>
            <p className='text-[3vh] font-medium'>Mobile Application w/ Flutter</p>
            <p className='text-[2vh]'>(Summer 2021)</p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[1.5vh]'>
              <p className=''>● Developed an android application using Flutter, Firestore, and MySQL technologies</p>
              <p className=''>● Created a efficient matching algorithm to match colleges to certain interests</p>
              <p className=''>● Scripted queries to access and manipulate user data and export applications to large application sites like google play</p>
            </div>
            <p className='text-[1.5vh] font-thin mt-[3vh] w-[24vw]'>Skills - Flutter, Dart, Firebase, Google Auth, MySQL, Java, Mobile Emulator</p>
          </div>
        </Paper>
        </div>
      </div>
    </div>
  )
}

export default Projects