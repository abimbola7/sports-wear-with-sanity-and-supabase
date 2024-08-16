"use client"
import React from 'react'
import { createClient } from '@/utils/supabase/client'

const ButtonProvider = () => {
  const supabase = createClient()
  const signGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider : "google",
      options : {
        redirectTo : 'http://localhost:3000/auth/callback',
      },
    })    
  }
  return (
    <>
      <button 
      onClick={signGoogle}
      className="flex items-center justify-center w-full px-2 py-1 font-medium text-center transition-colors duration-200 border rounded cursor-pointer hover:border-darkOrange"
      >
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
        alt="google" 
        className='inline-flex w-6 h-6 mr-3'
        />
        Sign in with Google
      </button>
      <div className='my-3 text-sm font-semibold'>OR</div>
    </>
  )
}

export default ButtonProvider
