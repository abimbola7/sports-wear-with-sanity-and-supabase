"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ConfirmSuccess = () => {
  const router  = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  },[])

  return (
    <div className='text-center flex items-center flex-col'>
      <h1>Email Confirmed</h1>
      <p>Your email has been successfully confirmed. You will be redirected to the login page shortly.</p>
      <img src='/spinner.svg' className='w-48 h-48 mt-3'/>
    </div>
  )
}

export default ConfirmSuccess
