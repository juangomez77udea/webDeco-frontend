import React from 'react'
import Image from 'next/image'
import Text from '@/app/components/atoms/Texts'

const Hero = () => {
      return (
            <section className="w-full h-125 overflow-hidden bg-gray-100 flex">
                  <div className="relative w-1/3 h-full">
                        <Image
                              src="/espiral.png"
                              alt="Espiral decorativa"
                              width={400}
                              height={400}
                              className="absolute left-0 bottom-0 opacity-20 select-none pointer-events-none"
                              style={{ width: 'auto', height: 'auto' }}
                        />
                  </div>
                  <div className="relative w-1/3 h-full">
                        <Image
                              src="/pinos.png"
                              alt="Pinos decorativos"
                              width={500}
                              height={400}
                              loading="eager"
                              className="absolute left-0 bottom-0 opacity-20 select-none pointer-events-none"
                              style={{ width: 'auto', height: 'auto' }}
                        />
                  </div>
                  <div className="w-1/3 h-full flex flex-col justify-start items-start pt-20 pl-8">
                        <Text
                              text="DeKoWeb"
                              variant="h1"
                              size="4xl"
                              weight="bold"
                              color="black"
                              font='roboto'
                        />
                        <div className="overflow-hidden w-full mt-2">
                              <Text
                                    text="Decorar es nuestra pasión..."
                                    variant="p"
                                    size="4xl"
                                    weight="normal"
                                    color="black"
                                    font="montecarlo"
                                    className="animate-marquee"
                              />
                        </div>
                  </div>

            </section>
      )
}

export default Hero