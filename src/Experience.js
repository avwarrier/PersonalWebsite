import React from 'react'
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';

const Experience = (props) => {
  return (
    !props.darkMode ? 
    <div className='flex flex-col h-[120vh]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#072b57", ":hover": {bgcolor: "#0a52a8"},}}><ArrowBackIcon sx={{color: "#fff"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-black'>Experience</h1>
          <AccessTimeFilledIcon sx={{color: "#34aeeb", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[5vh] h-[40vh] justify-center gap-[6vw]'>
        <div>
        <div   className='h-[45vh] w-[40vw] flex flex-col items-center shadow-lg rounded-lg'>
          <div className='mt-[2vh] flex gap-[2vw]'>
          <img className='h-[8vh] rounded-xl' src="data:image/png;base64,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"/>
          <div>
          <p className='font-sans text-[4vh] font-normal'>ASDRP Researcher</p>
          <p className='text-[2vh]'>May 2021 - Nov 2021</p>
          </div>
          </div>
          <div className=' h-[27vh] bg-gray-200 w-[35vw] mt-[3vh] rounded-md flex justify-center items-center px-5'>
            <p className='text-[2vh] font-light'>I worked with a team of researchers on building algorithms using Python to test Facial Bias in popular Artificial Intelligence Models such as Amazon and Safeway. We initially worked with libraries like PyTorch, numPy, and TensorFlow to develop several models that would each run through user data found in a very large data set with thousands of images. We also developed a GAN cycle algorithm to change image colors in facial datasets, finding that lighter gradients, as well as color changes, resulted in less bias.</p>
          </div>
        </div>
        <div   className='h-[45vh] w-[40vw] flex flex-col items-center shadow-lg rounded-lg mt-[6vh]'>
          <div className='mt-[2vh] flex gap-[2vw]'>
          <img className='h-[9vh] rounded-xl' src="https://media.licdn.com/dms/image/C560BAQEpT9vFvX2mIQ/company-logo_100_100/0/1563042618577?e=1693440000&v=beta&t=h7K7ukAc_1AE-JCOtyN4u_NianOoo_dxMszdgX9eh-0"/>
          <div>
          <p className='font-sans text-[4vh] font-normal'>Inspirit AI SWE</p>
          <p className='text-[2vh]'>May 2021 - Aug 2021</p>
          </div>
          </div>
          <div className=' h-[27vh] bg-gray-200 w-[35vw] mt-[3vh] rounded-md flex justify-center p-5'>
            <p className='text-[2vh] font-light'>I worked with a team to build a fully automatic sliding window algorithm for self-driving cars using python libraries including Tensor Flow, PyTorch, and OpenCV. We began working with stationary frames, applying the model to different types of pictures to train it to recognize general road signs, obstacles, and other vehicles. We then used higher-order models to shift our research into a set of frames and get the algorithm to work on a video.</p>
          </div>
        </div>
        </div>
        <div   className='h-[45vh] w-[40vw] flex flex-col items-center shadow-lg rounded-lg'>
          <div className='mt-[2vh] flex gap-[2vw]'>
          <img className='h-[8vh] rounded-xl' src="https://media.licdn.com/dms/image/C4E0BAQG0b6sYi7Q4TA/company-logo_100_100/0/1668088153612?e=1693440000&v=beta&t=OOInzqagI6fb29z5jQ1fEKxYn3o6WUQz0UIK9JeqW1U"/>
          <div>
          <p className='font-sans text-[4vh] font-normal'>Bagel Cafe</p>
          <p className='text-[2vh]'>May 2020 - Dec 2021</p>
          </div>
          </div>
          <div className=' h-[27vh] bg-gray-200 w-[35vw] mt-[3vh] rounded-md flex justify-center p-5'>
            <p className='text-[2vh] font-light'>Used Web Development libraries including React, Javascript, HTML5, CSS, Wix, and Firebase to develop a fully working website with an automatic payment system that supports major card companies.</p>
          </div>
        </div>
        
      </div>
    </div>
    :
    <div className='flex flex-col h-[120vh] bg-[#353c4a]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e6ca43", ":hover": {bgcolor: "#f5cd07"},}}><ArrowBackIcon sx={{color: "#333"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-slate-200'>Experience</h1>
          <AccessTimeFilledIcon sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[5vh] h-[40vh] justify-center gap-[6vw]'>
        <div>
        <div   className='h-[45vh] w-[40vw] flex flex-col items-center shadow-lg rounded-lg'>
          <div className='mt-[2vh] flex gap-[2vw]'>
          <img className='h-[8vh] rounded-xl' src="data:image/png;base64,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"/>
          <div>
          <p className='font-sans text-[4vh] font-normal text-slate-200'>ASDRP Researcher</p>
          <p className='text-[2vh] text-slate-200'>May 2021 - Nov 2021</p>
          </div>
          </div>
          <div className=' h-[27vh] bg-gray-600 w-[35vw] mt-[3vh] rounded-md flex justify-center items-center px-5'>
            <p className='text-[2vh] font-light text-slate-200'>I worked with a team of researchers on building algorithms using Python to test Facial Bias in popular Artificial Intelligence Models such as Amazon and Safeway. We initially worked with libraries like PyTorch, numPy, and TensorFlow to develop several models that would each run through user data found in a very large data set with thousands of images. We also developed a GAN cycle algorithm to change image colors in facial datasets, finding that lighter gradients, as well as color changes, resulted in less bias.</p>
          </div>
        </div>
        <div   className='h-[45vh] w-[40vw] flex flex-col items-center shadow-lg rounded-lg mt-[6vh]'>
          <div className='mt-[2vh] flex gap-[2vw]'>
          <img className='h-[9vh] rounded-xl' src="https://media.licdn.com/dms/image/C560BAQEpT9vFvX2mIQ/company-logo_100_100/0/1563042618577?e=1693440000&v=beta&t=h7K7ukAc_1AE-JCOtyN4u_NianOoo_dxMszdgX9eh-0"/>
          <div>
          <p className='font-sans text-[4vh] font-normal text-slate-200'>Inspirit AI SWE</p>
          <p className='text-[2vh] text-slate-200'>May 2021 - Aug 2021</p>
          </div>
          </div>
          <div className=' h-[27vh] bg-gray-600 w-[35vw] mt-[3vh] rounded-md flex justify-center p-5'>
            <p className='text-[2vh] font-light text-slate-200'>I worked with a team to build a fully automatic sliding window algorithm for self-driving cars using python libraries including Tensor Flow, PyTorch, and OpenCV. We began working with stationary frames, applying the model to different types of pictures to train it to recognize general road signs, obstacles, and other vehicles. We then used higher-order models to shift our research into a set of frames and get the algorithm to work on a video.</p>
          </div>
        </div>
        </div>
        <div   className='h-[45vh] w-[40vw] flex flex-col items-center shadow-lg rounded-lg'>
          <div className='mt-[2vh] flex gap-[2vw]'>
          <img className='h-[8vh] rounded-xl' src="https://media.licdn.com/dms/image/C4E0BAQG0b6sYi7Q4TA/company-logo_100_100/0/1668088153612?e=1693440000&v=beta&t=OOInzqagI6fb29z5jQ1fEKxYn3o6WUQz0UIK9JeqW1U"/>
          <div>
          <p className='font-sans text-[4vh] font-normal text-slate-200'>Bagel Cafe</p>
          <p className='text-[2vh] text-slate-200'>May 2020 - Dec 2021</p>
          </div>
          </div>
          <div className=' h-[27vh] bg-gray-600 w-[35vw] mt-[3vh] rounded-md flex justify-center p-5'>
            <p className='text-[2vh] font-light text-slate-200'>Used Web Development libraries including React, Javascript, HTML5, CSS, Wix, and Firebase to develop a fully working website with an automatic payment system that supports major card companies.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience