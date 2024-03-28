// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-8'>
      <div className='flex gap-10 items-center justify-around'>
        <div>
          <img className='h-10' src='https://s3-alpha-sig.figma.com/img/f9cc/c444/a82f854f01e0200063607dd2ef26f69c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zg586s7gjjq7poe21GX4NM73vPRI3RwFuFPxYuc1mDCSMo9whrIEixHKmzml2h99go2fOhe9w32z8YfLokXEtIfGJfNlAgsXlwjQfGz6Y8xWpLoxvIb1tobdEQtbidiSD-v9su9C~xG8dx3cZhDp~btfGIO-ov6tdSgW3F9drgg1uI4HzFglMZbcq-mMMVazcjyjkKsmXejpxpJFHO5w354Ax0g4~1fnTDjbeekkl8bODu0DIpFb-Wpn81KDSa9FhA7OEWQnsHaU6Y2iBMGtUBb9iL6bNB8WWWp4Tw0Zs1fOD4g~zhVT1sDA9Ep-2zqwwvTEshMUkMdgdthMccQOsw__' alt='logo' />
        </div>
        <div className='flex gap-5'>
            <CiFacebook className='h-9 w-9' />
            <AiFillInstagram className='h-9 w-9' />
            <CiTwitter className='h-9 w-9'/>
            <CiLinkedin className='h-9 w-9'/>
        </div>
        <div className='flex gap-10'>
            <div className='space-y-4'>
            <h2 className='font-bold text-lg'>Product and Services</h2>
            </div>
            <div className='space-y-4'>
            <h2 className='font-bold text-lg'>Contact</h2>
            </div>
            <div className='space-y-4'>
            <h2 className='font-bold text-lg'>About</h2>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer