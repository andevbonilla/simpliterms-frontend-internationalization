import Image from 'next/image'
import React from 'react'

export const LoadingComponent = () => {
  return (
    <div className='fixed left-0 top-0 h-full w-full flex items-center justify-center z-[999] bg-white'>
      <Image width={60}
        height={60}
        alt='Simpliterms Logo'
        src={require('@/assets/simpliterms-logo.png')}
        className='rounded-full rotate-animated'
      />
    </div>
  )
}