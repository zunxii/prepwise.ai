'use client'
import { signOut } from '@/lib/actions/auth.action';
import React from 'react'

const SignOutBtn = () => {
    const handleSignOut = async () => {
        await signOut();
      }
  return (
    <button className='btn-primary absolute top-10 right-10' onClick={() => handleSignOut()}> sign out</button>
  )
}

export default SignOutBtn
