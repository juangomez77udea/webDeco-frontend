import React from 'react'
import Image from 'next/image'
import Login from '@/app/components/molecules/Login'
import { ToggleGroup, ToggleGroupItem } from '@/app/components/molecules/Toggle-group'

const Header = () => {
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
                              <ToggleGroup type="single" variant="default" size="default" orientation="horizontal" spacing={8}>
                                    <ToggleGroupItem  value="inicio">Inicio</ToggleGroupItem>
                                    <ToggleGroupItem value="productos">Productos</ToggleGroupItem>
                                    <ToggleGroupItem value="contactanos">Contáctanos</ToggleGroupItem>
                              </ToggleGroup>
                        </div>

                        <div className='flex-1 flex justify-end'>
                              <Login />
                        </div>

                  </div>
            </header>
      )
}

export default Header