'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ButtonNav = ({ text = '', icon = 'material-symbols:home-rounded', href = '' }: { text: string, icon?: string, href?: string }) => {
      const pathname = usePathname()
      const isActive = pathname === href

      return (
            <div className='group flex flex-col items-center mx-4 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:shadow-md hover:scale-110'>
                  <Icon icon={icon} width="24" height="24" className="text-white transition-colors duration-300 group-hover:text-indigo-500" />
                  <Link 
                        href={href} 
                        className={`font-bold text-white transition-colors duration-300 border-b-2 mt-1 group-hover:text-indigo-500 group-hover:border-white ${isActive ? 'border-blue-500' : 'border-transparent'}`}
                  >
                        {text}
                  </Link>
            </div>
      )
}

export default ButtonNav