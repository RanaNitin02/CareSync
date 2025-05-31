import React from 'react'
import {services} from '../assets/data/services'  
import ServiceCard from '../components/services/ServiceCard.jsx'

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] '>
          {
              services.map((item, index) => ( 
                
                <div className='transition-transform transform hover:scale-105 duration-300'>
                  <ServiceCard item={item} index={index} key={index} />
                </div>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services