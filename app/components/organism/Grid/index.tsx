import React from 'react'
import Card from '@/app/components/molecules/cards'

const cards = [
      { name: 'Corona navideña', price: 45000, description: 'Hermosa corona decorativa para navidad.', image: '/corona.jpg' },
      { name: 'Corona navideña', price: 45000, description: 'Hermosa corona decorativa para navidad.', image: '/corona.jpg' },
      { name: 'Corona navideña', price: 45000, description: 'Hermosa corona decorativa para navidad.', image: '/corona.jpg' },
      { name: 'Corona navideña', price: 45000, description: 'Hermosa corona decorativa para navidad.', image: '/corona.jpg' },

]

const index = () => {
      return (
            <section className="flex justify-center px-8 py-12">
                  <div className="grid grid-cols-4 gap-6">
                        {cards.map((card, i) => (
                              <Card
                                    key={i}
                                    name={card.name}
                                    price={card.price}
                                    description={card.description}
                                    image={card.image}
                              />
                        ))}
                  </div>
            </section>
      )
}

export default index