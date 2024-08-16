import React from 'react'
import { login } from './actions'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ButtonProvider from '@/components/buttonprovider'



const getUsers = async () => {
  const supabase = createClient()
    const { data : {
      user
    }, error } = await supabase.auth.getUser()
  return user
}




const LoginPage = async () => {
  const supabase = createClient();

  const user = await getUsers()
  if (user) {
    redirect("/")
  }

  return (
    <div className='flex flex-col items-center mt-12 w-full min-h-screen px-3'>
      <img
      src={'https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/site-logo-black.svg?alt=media&token=43d164a3-8b8f-4bc2-b7b5-8e4262828fae'}
      alt="image"
      className='w-48 sm:w-80 mb-12'
      />
      <form className="flex flex-col items-center justify-center w-full max-w-lg p-3 text-sm border rounded-md h-fit">
        <ButtonProvider />
        <div className='w-full'>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required  className='block w-full px-2 py-2 mt-1 border rounded-md focus:outline-none ' placeholder='name@email.com'/>
        </div>
        <div className='w-full mt-3'>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required className='block w-full px-2 py-2 mt-1 border rounded-md focus:outline-none ' placeholder='@password'/>
        </div>
        <div className='w-full mt-3 space-x-4'>
          <button formAction={login} className='w-full px-4 py-2 text-sm text-white rounded-md bg-darkOrange'>Login</button>
        </div>
        <span className='mt-3 text-xs'>Don&apos;t have an account? <Link href="/signup" className='text-darkOrange'>Register</Link></span>
      </form>
      
    </div>
  )
}

export default LoginPage
