import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import faqImg from '../assets/images/faq-img.png'
import { BsArrowRight } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import About from '../components/about/About'
import ServiceList from '../components/Services/ServiceList'

const Home = () => {

  const navigate = useNavigate()

  return <>
    
    <>
      {/*---------- Hero section 1 ----------*/}
      <section className='hero__section pt-[60px] 2xl:h-[800px]  '>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">

              {/*---------- Hero content ----------*/}
              <div>
                <div className='lg:w-[570px]'>
                  <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsam assumenda nostrum dignissimos voluptates ad unde commodi illo nam obcaecati.
                  </p>

                  <button className='btn' onClick={() => navigate('/doctors')}>Request an appointment</button>
                </div>

                {/*---------- Hero counter ----------*/}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5'>

                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                      <span className='w-[80px] h-2 bg-primary rounded-full block mt-[-14px]'></span>
                      <p>Years of Experience</p>
                    </div>

                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                      <span className='w-[80px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                      <p>Clinic Locations</p>
                    </div>

                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                      <span className='w-[120px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                      <p>Patient Satisfaction</p>
                    </div>

                  </div>

              </div>

              {/*---------- Hero content ----------*/}
              <div className='flex gap-[30px] justify-end'>
                <div>
                  <img src={heroImg01} className='w-full' alt="" />
                </div>
                <div className='mt-[30px]'>
                  <img src={heroImg02} className='w-full mb-[30px]' alt="" />
                  <img src={heroImg03} className='w-full' alt="" />
                </div>
              </div>

            </div>
          </div>
      </section>

      {/*---------- hero section 2 ----------*/}
      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className='text__para text-center'>World class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] text-textColor font-[700] text-center leading-9">
                  Find a Doctor
                </h2>
                <p className="text-[16px] text-textColor font-[400] mt-4 text-center leading-7">
                World class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link to='/doctors' onClick={() => window.scrollTo(0, 0)} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                </Link>

              </div>

            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] text-textColor font-[700] text-center leading-9">
                  Find a Location
                </h2>
                <p className="text-[16px] text-textColor font-[400] mt-4 text-center leading-7">
                World class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link to='/doctors' onClick={() => window.scrollTo(0, 0)} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                </Link>

              </div>

            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] text-textColor font-[700] text-center leading-9">
                  Book Appointment
                </h2>
                <p className="text-[16px] text-textColor font-[400] mt-4 text-center leading-7">
                World class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link to='/doctors' onClick={() => window.scrollTo(0, 0)} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/*---------- about section ----------*/}
      <About />

      {/*---------- services section ----------*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>
          <ServiceList  />
        </div>
      </section>
    </>

  </>
  
}

export default Home