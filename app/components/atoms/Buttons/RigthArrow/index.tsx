import React from 'react'
import { Icon } from '@iconify/react';

const index = ({ text = 'Next' }: { text?: string }) => {
      return (
            <div className=' flex items-center gap-1 font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:-translate-x-1 hover:text-primary group'>
                  <Icon icon="material-symbols:arrow-right-alt" width="24" height="24"  style={{color: '#000'}} />
                  {text}
            </div>
      )
}

export default index