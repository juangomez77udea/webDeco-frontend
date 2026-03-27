import React from 'react'

const index = ({ text = "Login" }: { text: string }) => {
      return (
            <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-tertiary rounded-lg hover:bg-primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  {text}
            </button>
      )
}

export default index