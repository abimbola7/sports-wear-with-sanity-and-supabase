// "use client"

// import { useGSAP } from '@gsap/react'
// import React from 'react'
// import gsap from 'gsap'

// const Input = ({ types, labels }) => {
//   const inputContainer = React.useRef(null)
//   const timeline = React.useRef(null)
//   const { contextSafe } = useGSAP(() => {
//     timeline.current = gsap.timeline({
//       defaults : {
//         ease : "none",
//         duration : .2,
//         paused : true
//       }
//     })
//     .to(`#${labels.id}`, {
//       x : -5,
//       y : -22,
//       fontSize : "12px"
//     })

//   }, {
//     scope : inputContainer
//   })
//   const activate = contextSafe(() => {
//     timeline?.current?.play()
//     console.log("is it focusing??")
//   })
//   const remove = contextSafe(() => {
//     timeline?.current?.reverse()
//   })
//   return (
//     <div className='relative w-full' ref={inputContainer}>
//       <label htmlFor={labels.htmlFor} id={labels.id}  className='absolute top-[30%] left-3 px-2 py-1 bg-white pointer-events-none'>{ labels.labelName }</label>
//       <input 
//       onFocus={activate}
//       onBlur={remove}
//       { ...types } 
//       required  className='block w-full px-2 py-3 mt-1 border rounded-md focus:outline-none focus:border-darkOrange focus:border-2'/>
//     </div>
//   )
// }

// export default Input


"use client"

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';

const Input = ({ types, labels }) => {
  const inputContainer = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    timeline.current = gsap.timeline({
      defaults: {
        ease: "none",
        duration: 0.1,
      },
      paused : true
    })
    .to(`#${labels.id}`, {
      x: -5,
      y: -22,
      fontSize: "12px"
    });
  }, [labels.id]);

  const activate = () => {
    timeline?.current?.play();
    console.log("is it focusing??");
  }

  const remove = () => {
    timeline?.current?.reverse();
  }

  return (
    <div className='relative w-full' ref={inputContainer}>
      <label htmlFor={labels.htmlFor} id={labels.id} className='absolute top-[27%] left-3 px-2 py-1 bg-white pointer-events-none label'>
        {labels.labelName}
      </label>
      <input 
        onFocus={activate}
        onBlur={remove}
        {...types}
        required
        className='block w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:border-darkOrange focus:border-2 inputt'
      />
    </div>
  );
}

export default Input;
