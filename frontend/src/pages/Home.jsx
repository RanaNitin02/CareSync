import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

// Images
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import faqImg from '../assets/images/faq-img.png'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import featureImg from '../assets/images/feature-img.png'


// Components
import About from '../components/about/About.jsx'
import DoctorList from '../components/doctors/DoctorList'
import FaqList from '../components/faq/FaqList.jsx'
import ServiceList from '../components/services/ServiceList'
import Testimonal from '../components/testimonal/Testimonal.jsx'

import {authContext} from '../context/AuthContext.jsx'
import { useContext } from 'react'


const Home = () => {

  const navigate = useNavigate()
  const {user} = useContext(authContext);

  return <>

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
          <ServiceList />
        </div>
      </section>

      {/*---------- features section ----------*/}
      <section>
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row'>

            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className='pl-4'>
                <li className="text__para">1. Schedule the appointment directly.</li>
                <li className="text__para">2. Search for your physician here, and contact their office.</li>
                <li className="text__para">3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
              </ul>
              <Link to='/'>
                <button className="btn">Learn more</button>
              </Link>
            </div>

            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4' alt="" />
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className="flex items-center justify-between">
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]' >
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]' >
                      10:00 AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded-full'>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>Consultation</div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt="" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/*---------- doctors section ----------*/}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched, expert health care.
          </p>
        </div>

        {!user ? (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-xl mx-auto mt-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="Login required"
                className="w-28 h-28 mb-4 object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Please log in</h2>
              <p className="text-gray-600 mb-4">
                You need to be logged in to view our expert doctor list.
              </p>
              <a
                href="/login"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </a>
            </div>
          </div>
        ) : (
          <DoctorList />
        )}
      </div>
    </section>

      {/*---------- faq section ----------*/}
      <section>
            <div className='container'>
              
              <div className='flex justify-between gap-[50px] lg:gap-0'>
                <div className='w-1/2 hidden md:block'>
                  <img src={faqImg} alt="FAQ Illustration" />
                </div>
                <div className='w-full md:w-1/2'>
                  <h2 className='heading'>Most questions by our beloved patients</h2>
                  <FaqList />
                </div>
              </div>
            </div>
      </section>

      {/*---------- testimonal section ----------*/}
      <section>
            <div className="container">
              <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>What our patients say</h2>
                <p className='text__para text-center'>World-classcare for everyone. Our health system offers unmatched, expert health care.</p>
              </div>

              <Testimonal />

              {/* <Test /> */}
            </div>
      </section>
    </>
}

export default Home