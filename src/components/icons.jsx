"use client"
import Link from 'next/link';
import React from 'react';
import { oswald } from '@/app/(user)/layout';
import { useInView, motion } from 'framer-motion';

export default function Icons({ name, icon }) {
  // const ref = React.useRef(null)
  // const inView  = useInView(ref)
  // console.log(inView)
  return (
    <motion.div 
    initial={{
      y : 50
    }}
    whileInView={{
      y : 0
    }}
    className={`flex flex-col space-y-6 items-center ${oswald.className} justify-center p-5`}>
      <Link href="" className='transition-transform duration-500 ease-out hover:translate-y-4'>
        <span className='text-4xl md:text-6xl lg:text-8xl text-darkOrange'>{icon}</span>
      </Link>
      <Link href="">
        <p className='text-3xl font-medium text-center custom-black'>{name}</p>
      </Link>
    </motion.div>
  )
}
