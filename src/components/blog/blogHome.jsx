import React from 'react'

import Navbar from "../navbar/navbar";

export default function blogHome() {
  return (
    <section  className='bg-backgroundColor mainContainer h-screen w-full box-border px-4 flex flex-col items-center justify-start'>
        <Navbar />
        <h1 className='font-cyber text-secondaryBlue mt-5 mb-5'> Posts </h1>
        <div className="posts">
            Map through posts here
        </div>
    </section>
  )
}
