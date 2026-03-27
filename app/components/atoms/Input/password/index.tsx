import React from 'react'
import { Icon } from '@iconify/react'

const index = () => {
      return (
            <div className='w-1/4'>
                  <label
                        htmlFor="password"
                        className="block text-sm font-bold text-slate-600">
                        Contraseña
                  </label>
                  <div className=" relative flex items-center mt-2">
                        <button className="absolute right-3 z-10 focus:outline-none">
                              <Icon icon="mdi:eye" width="20" height="20" className="text-gray-500" />
                        </button>

                        <input
                              type="password"
                              placeholder="********"
                              className="block w-full py-2.5 pl-5 pr-10 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg focus:outline-none"
                        />
                  </div>
            </div>
      )
}

export default index