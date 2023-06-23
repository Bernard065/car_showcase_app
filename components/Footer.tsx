import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex flex-wrap max-md:flex-col justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image 
            src='/logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
          <p>
            Bernard' Cars@2023 <br />
            All Rights Reserved
          </p>
        </div>
        <div className='footer_links'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className='footer_link'>
              <h3 className='font-bold'>{footerLink.title}</h3>
              <div className='flex flex-col gap-5'>
                {footerLink.links.map((link) => (
                  <Link key={link.title} href={link.url} className='text-gray-500'>{link.title}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>Copyrights @2023 Bernard's Cars. All rights reserved</p>
        <div>
          <div className='footer_copyrights_links'>
            <Link href='/' className='text-gray-500'>Privacy & Policy</Link>
            <Link href='/' className='text-gray-500'>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer