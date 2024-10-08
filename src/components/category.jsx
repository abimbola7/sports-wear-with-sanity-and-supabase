"use client"
import React from 'react'
import CategoryItems from './category-items'
import { oswald } from '@/app/(user)/layout';
import { collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Category() {
  return (
    <section className="px-4 mx-auto mt-24 max-w-7xl">
    <h2 className={`${oswald.className} font-semibold text-xl mb-10 text-customBlack`}>Shop by Category</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <CategoryItems 
      src="https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/sports-wear-store-category-img-1.jpg?alt=media&token=846f8677-ffcb-4d2b-ad8c-7848a5324c1a"
      type={"clothing"}
       />
      <CategoryItems 
      src="https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/sports-wear-store-category-img-2.jpg?alt=media&token=c272ec08-a68d-4c1d-8c6c-ef0f127f27cf"
      type={"gears"}
      />
      <CategoryItems 
      src="https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/sports-wear-store-category-img-3.jpg?alt=media&token=3b3b8b1e-9b9a-4b9e-9b9a-9b9a9b9a9b9a"
      type={"shoes"}
      />
      <CategoryItems 
      src="https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/sports-wear-store-category-img-4.jpg?alt=media&token=9b9a9b9a-9b9a-9b9a-9b9a-9b9a9b9a9b9a"
      type={"sportstyle"}
      />
    </div>
    </section>
  )
}
