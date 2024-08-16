import React from 'react'
import { login, signup } from './actions'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Input from '@/components/ui/input'



const getUsers = async () => {
  const supabase = createClient()
    const { data : {
      user
    }, error } = await supabase.auth.getUser()
  return user
}



const RegisterPage = async () => {
  const user = await getUsers()
  if (user) {
    redirect("/")
  }
  return (
    <div className='flex flex-col items-center w-full min-h-screen'>
      <img
      src={'https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/site-logo-black.svg?alt=media&token=43d164a3-8b8f-4bc2-b7b5-8e4262828fae'}
      alt="image"
      className='mb-20 w-80'
      />
      <form className="flex flex-col items-center justify-center w-full max-w-lg p-3 text-sm border rounded-md h-fit">
        <div className='w-full mt-3'>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" name="firstName" type="firstName" required className='block w-full px-2 py-3 mt-1 border rounded-md focus:outline-none focus:border-darkOrange ' placeholder='First Name'/>
        </div>
        <div className='w-full mt-3'>
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" name="lastName" type="lastName" required className='block w-full px-2 py-3 mt-1 border rounded-md focus:outline-none focus:border-darkOrange ' placeholder='Last Name'/>
        </div>
        <div className='w-full mt-3'>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required className='block w-full px-2 py-3 mt-1 border rounded-md focus:outline-none focus:border-darkOrange ' placeholder='name@gmail.com'/>
        </div>
        <div className='w-full mt-3'>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required className='block w-full px-2 py-3 mt-1 border rounded-md focus:outline-none focus:border-darkOrange ' placeholder='@password'/>
        </div>
        <div className='w-full mt-3 space-x-4'>
          <button formAction={signup} className='w-full px-4 py-2 text-sm text-white rounded-md bg-darkOrange'>Sign up</button>
        </div>
        <span className='mt-3 text-xs'>Already have an account? <Link href="/login" className='font-medium text-darkOrange'>Login</Link></span>
      </form>
    </div>
  )
}

export default RegisterPage
