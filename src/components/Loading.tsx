import Image from 'next/image'
import React from 'react'

export const LoadingComponent = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Image width={60}
             height={60}
             alt='Simpliterms Logo'
             src={require('@/assets/simpliterms-logo.png')}
             className='rounded-full rotate-animated'
      />
    </div>
  )
}