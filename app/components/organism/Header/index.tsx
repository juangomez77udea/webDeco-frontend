import React from 'react'
import Image from 'next/image'
import Login from '@/app/components/molecules/Login'
import NavBarButtons from '@/app/components/molecules/Navbar'

const index = () => {
      return (
            <header style={{ background: 'linear-gradient(to right, #659FC8, #8ABD95)' }}>
                  <div className='flex items-center justify-between px-6 py-3'>
                        <div className='flex-1 relative h-16 w-24'>
                              <Image
                                    src='/logo.png'
                                    alt='Logo'
                                    fill
                                    style={{ objectFit: 'contain' }}
                              />
                        </div>

                        <div className='flex-1 flex justify-center'>
                              <NavBarButtons />
                        </div>

                        <div className='flex-1 flex justify-end'>
                              <Login />
                        </div>
                  </div>
            </header>
      )
}

export default index