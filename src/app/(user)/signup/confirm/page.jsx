import Link from 'next/link'
import React from 'react'

const ConfirmPage = () => {
  return (
    <div className='min-h-screen w-full flex items-center flex-col justify-start space-y-3'>
      <img
      src={'https://firebasestorage.googleapis.com/v0/b/sport-wear-store.appspot.com/o/site-logo-black.svg?alt=media&token=43d164a3-8b8f-4bc2-b7b5-8e4262828fae'}
      alt="image"
      className='w-80'
        />
      <h1 className="text-4xl !mt-7">Confirm Your Email</h1>
      <p className="text-sm">Thank you for signing up! Please check your email and click on the verification to confirm your account</p>
      <p className="text-sm">Once you&apos;ve confirmed your email, you can <Link href="/login" className='text-darkOrange font-medium'>Log in</Link>.</p>
    </div>
  )
}

export default ConfirmPage
