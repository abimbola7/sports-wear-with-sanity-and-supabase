"use client"
import React, { useMemo } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { PiShoppingCartFill } from "react-icons/pi" 
import { CgProfile } from "react-icons/cg" 
import { montserrat, oswald } from '@/app/(user)/layout';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { modalActions } from '@/store/modalSlice'
import { fetchShoeData } from '@/store/cartSlice'
import { hamburgerToggler, loginToggler } from '@/store/uiSlice'
import {signIn, signOut, useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ImUser, ImUserCheck } from "react-icons/im";
import { createClient } from '@/utils/supabase/client'
import { CiShoppingCart } from "react-icons/ci";
import { useRouter } from 'next/navigation'


export default function Header() {
  const router = useRouter();
  const supabase = createClient();
  const carts = useSelector(state=>state.cart.cart);
  const [name, setName] = React.useState(null);
  const loginPopup = useSelector(state => state.ui.loginPopup);
  const updatedCarts = useMemo(() => carts, [carts]);
  const [ totaAmount, setTotalAmount ] = React.useState(0)
  const [ totalPrice, setTotalPrice ] = React.useState(0)
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { data } = useSession();
  const pathname = usePathname();
  const [ user, setUser ] = React.useState(null);
  React.useEffect(()=>{
    setTotalAmount(
      updatedCarts?.reduce((total, item)=>total + item.amount, 0)
    )
    setTotalPrice(
      updatedCarts?.reduce((total, item)=>total + (item.amount * item.price), 0)
    )
  }, [updatedCarts])
  // React.useEffect(() => {
  // const scrollHandler = () =>{
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true)
  //   } else {
  //     setIsScrolled(false)
  //   }
  // }

  // window.addEventListener('scroll', scrollHandler);

  // return ()=>{
  //   window.removeEventListener('scroll', scrollHandler);
  // }
  // })

  const getUser = async () => {
    const { data : { user }, error } = await supabase.auth.getUser();
    if (error) {
      return null;
    }
    return user;
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      // router.refresh();
      window.location.reload();
    }
    console.log(error);
  }

  React.useEffect(()=>{
    dispatch(fetchShoeData(data))
  }, [dispatch, data?.user?.uid])
  
  React.useEffect(()=>{
    // supabase.auth.onAuthStateChange((event, session) => {
    //   console.log(event, session?.user)
    //   setUser(session?.user)
    // })    
    const fetchUserData = async () => {
      const data = await getUser();
      // console.log(data)
      setUser(data)
      setName(data?.identities[0]?.identity_data?.first_name || data?.identities[0]?.identity_data?.full_name.split(" ")[0] || data?.identities[0]?.identity_data?.first_name)
    }
    fetchUserData()
  }, [])

  return (
    <header 
    className={`${montserrat.className} font-extrabold z-[100000] transition-colors duration-500 !bg-transparent`}>
      {/* <SideBar /> */}
      <div
      className='flex items-center justify-between px-4 py-4 mx-auto max-w-7xl md:px-2'
      >
      {/* left */}
       <motion.div
        className="flex items-center space-x-10">
        <Link 
        href="/" 
        className='text-2xl font-bold'>
          SPARTA
          <motion.span
          animate={{
            rotate : 360,
            x : 200
          }} 
          className='text-darkOrange'>X</motion.span>
        </Link>
        <ul className='hidden space-x-6 md:inline-flex'>
          {
            [
              ['SHOP ALL', '/products'], ['MEN', '/products/men'], ['WOMEN', '/products/women'], ['TOP DEALS', 'top-deals']
            ].map(([item, url]) => (
              <Link 
              key={item}
              href={url}>
                <li 
                className='text-xs font-medium cursor-pointer hover:text-darkOrange'>
                  {item}
                </li>
              </Link>
            ))
          }
        </ul>
       </motion.div> 

       {/* THIRD */}
        <div className="flex items-center space-x-3">
          {
            user ? (
              <div className='relative'>
                <div 
                onClick={() => dispatch(loginToggler())}
                className='p-2 text-xs font-normal border rounded cursor-pointer border-darkOrange text-darkOrange hover:bg-darkOrange hover:text-white'>
                  <ImUserCheck className='inline-block mr-2' size={20}/>
                  Hello { name }
                </div>
                {
                  loginPopup && (
                    <div className='absolute right-0 w-48 overflow-hidden text-xs font-normal bg-white rounded-md h-fit top-14'>
                      <ul>
                        <li className='p-3 transition-colors duration-200 cursor-pointer hover:bg-gray-200'>
                          <ImUser className='inline-block mr-2' size={20}/>
                          <Link href="/account" className='text-gray-700'>My Account</Link>
                          </li>
                        <li className='p-3 transition-colors duration-200 cursor-pointer hover:bg-gray-200'>
                          <CiShoppingCart className='inline-block mr-2' size={20}/>
                          <Link href="/cart" className='text-gray-700'>My Cart</Link>
                        </li>

                        <div 
                        onClick={logout}
                        className="p-3 font-medium tracking-wide text-center uppercase border-t border-gray-400 cursor-pointer hover:bg-darkOrange text-darkOranger hover:text-white">
                          logout
                        </div>
                      </ul>
                    </div>
                  )
                }
              </div>
            ) : (
              <Link href="/login" className='px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-300 bg-white border rounded-md border-darkOrange text-darkOrange hover:bg-darkOrange hover:text-white'>
                <ImUser className='inline-block mr-2' size={20}/>
                Login / Sign Up
              </Link>
            )
          }
          <div 
            onClick={()=>dispatch(hamburgerToggler())}
            className="p-2 rounded-sm cursor-pointer bg-darkOrange md:hidden">
              <AiOutlineMenu className='text-xl text-white'/>
          </div>
        </div>
      </div>
    </header>
  )
}
