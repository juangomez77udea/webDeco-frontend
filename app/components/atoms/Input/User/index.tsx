import React from 'react'

const index = () => {
      return (
            <div>
                  <label
                        htmlFor="username"
                        className="block text-sm font-bold text-slate-600">
                        Usuario
                  </label>

                  <input
                        type="text"
                        placeholder="Ingrese su Usuario"
                        className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                  />
            </div>
      )
}

export default index