"use client"

import React from 'react';
import "./hero.css";
import { oswald, montserrat } from '@/app/(user)/layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero({ user, userData }) {
  console.log(user)
  return (
    <section
    className={`min-h-screen w-full flex justify-center items-center hero`}
    >
      <div className='w-11/12'>
        <div className="flex flex-col max-w-md space-y-6 text-white md:max-w-xl">
          <h1 className={`text-5xl md:text-[5rem] leading-normal font-medium ${oswald.className}`}>Let&apos;s Level Up Your Game</h1>
          <p className={`${montserrat.className} font-semibold text-md`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam quam dolor voluptates consequatur.</p>
          <motion.div 
          whileHover={{
            scale: 1.2
          }}
          className='w-fit'>
            <Link
            href={`/products`}
            className={`px-8 py-4 rounded-3xl text-xs bg-white text-black w-fit font-semibold ${montserrat.className}`}
            >
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
