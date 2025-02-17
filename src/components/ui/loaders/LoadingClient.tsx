"use client"
import Image from 'next/image'
import React from 'react'
import simplitermsLogo from "../../../assets/simpliterms-logo.png"

export const LoadingClient = () => {
    return (
        <div className='fixed left-0 top-0 h-full w-full flex items-center justify-center z-[999] bg-white'>
            <Image width={60}
                height={60}
                alt='Simpliterms Logo'
                src={simplitermsLogo}
                className='rounded-full rotate-animated'
            />
        </div>
    )
}