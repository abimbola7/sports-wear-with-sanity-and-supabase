
"use client"
import Image from 'next/image'
import React from 'react'
import { oswald, montserrat } from '@/app/(user)/layout';
import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from '@/store/cartSlice';
import { useSession } from 'next-auth/react';


export default function Collection() {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart.cart);

  return (
    <section>
      <div className="w-[90%] collection mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border">
        <div className="flex flex-col items-center justify-between px-8 py-12 space-y-6 text-white md:items-start">
          <h2 className={`text-3xl font-bold text-white ${montserrat.className}`}>
            SPARTA
            <span className='text-darkOrange'>X</span>
          </h2>
          <div className="text-center text-white md:text-left">
            <h1 className={`text-4xl ${oswald.className}`}>Adventure Ready</h1>   
            <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati error maiores</p>
          </div>
          <button className={`px-10 py-4 rounded-3xl text-xs bg-white text-black w-fit font-semibold ${montserrat.className} mt-12 lg:mt-24`}>
            SHOP COLLECTION
          </button>
        </div>
        <div className="grid grid-cols-2 py-10 lg:py-16 lg:col-span-2 lg:pr-14 justify-items-center ">
            <Image
            // placeholder='blur'
            loading='lazy'
            quality={100}
            src={"https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/sports-wear-store-collection-img-1.jpg?alt=media&token=01d42056-4462-4dd3-b9f9-b21cbe5a1a2b"}
            alt={"alt"}
            className="object-cover object-center"
            width={300}
            height={400}
            />
            <Image
            // placeholder='blur'
            loading='lazy'
            quality={100}
            src={"https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/sports-wear-store-collection-img-2.jpg?alt=media&token=01d42056-4462-4dd3-b9f9-b21cbe5a1a2b"}
            alt={"alt"}
            className="object-cover object-center"
            width={300}
            height={400}
            />
        </div>
      </div>
    </section>
  )
}
