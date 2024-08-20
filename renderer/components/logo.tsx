import Image from 'next/image'
import React from 'react'
import logo from '../public/images/logo.png'
const Logo = () => {
  return (
    <>
      <Image src={logo} alt='Logo SIGEAC' width={350} height={350} className='w-auto h-auto' />
    </>
  )
}

export default Logo
