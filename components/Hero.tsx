'use client'

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {

  const handleScroll = () => {}

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero_title'>
                Find, book, or rent a car - quickly and easily!
            </h1>
            <p className='hero_subtitle'>
                Strealime your car rental experience with our fast process
            </p>
            <CustomButton 
              title="Explore Cars"
              containerStyles='bg-primary-blue text-white rounded-full mt-10'
              handleClick={handleScroll}
            />
        </div>
        <div className='hero_image-container'>
          <div className='hero_image'>
            <Image 
              src='/hero.png' alt='hero' fill className='object-contain'
            />
            <div className='hero_image-overlay' />
          </div>
        </div>
    </div>
  )
}

export default Hero