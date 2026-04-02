import React from 'react'
import Image from 'next/image'
import Text from '@/app/components/atoms/Texts'

interface CardProps {
      name?: string
      price?: number
      description?: string
      image?: string
}

const index = ({
      name = 'Nombre decoración',
      price = 0,
      description = 'Descripción de la decoración.',
      image = '/placeholder.png',
}: CardProps) => {
      return (
            <div className="flex flex-col w-64 bg-white rounded-2xl shadow-md overflow-hidden">

                  <div className="relative w-full h-52 bg-gray-100">
                        <Image
                              src={image}
                              alt={name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 256px"
                              style={{ objectFit: 'cover' }}
                        />
                  </div>

                  <div className="flex flex-col gap-1 p-4">
                        <Text text={name} variant="h3" size="md" weight="semibold" color="black" />
                        <Text text={`$${price}`} variant="p" size="lg" weight="bold" color="primary" />
                        <Text text={description} variant="p" size="sm" weight="normal" color="gray" />
                  </div>

            </div>
      )
}

export default index