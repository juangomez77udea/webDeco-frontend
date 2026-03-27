import React from 'react'
import InputUser from '@/app/components/atoms/Input/User'
import Inputpassword from '@/app/components/atoms/Input/password'
import ButtonLogin from '@/app/components/atoms/Buttons/ButtonLogin'

const index = () => {
      return (
            <div className=' flex items-end gap-4'>
                  <InputUser />
                  <Inputpassword />
                  <ButtonLogin text={'Login'} />
            </div>
      )
}

export default index