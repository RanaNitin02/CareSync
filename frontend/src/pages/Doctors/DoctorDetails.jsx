import { useState } from 'react'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import DoctorAbout from './DoctorAbout'
import startIcon from '../../assets/images/Star.png'
import docImg from '../../assets/images/doctor-img02.png'


const DoctorDetails = () => {

  const [tab, setTab] = useState("about");

  return <section>
    <div className="max-w-[1170px] mx-auto px-5">
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={docImg} className='w-full' alt="" />
            </figure>

            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded '>
                Surgeon
              </span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold '>Rahul, pages/doctorDetails</h3>
              <div className="flex items-center gap-[6px]">
                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor '>
                  <img src={startIcon} alt="" />
                  4.7
                </span>
                <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor '>
                  (252)
                </span>
              </div>

              <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae provident illum amet aut itaque dolorum recusandae maxime ad ea?</p>
            </div>
          </div>

          <div className='mt-[50px] border-solid border-[#0066ff34] border-b'>
            <button onClick={() => setTab('about')} className={` ${tab === "about" && 'border-b border-solid border-primary'} py-2 px-5 mr-5 leading-7 text-[16px] text-textColor font-semibold `}>
              About
            </button>
            <button onClick={() => setTab('feedback')} className={` ${tab === "feedback" && 'border-b border-solid border-primary'} py-2 px-5 mr-5 leading-7  text-[16px] text-textColor font-semibold `}>
              Feedback
            </button>
          </div>

          <div className='mt-[50px] '>
              { tab === 'about' && (
                <DoctorAbout />
                ) }
              { tab === 'feedback' && (
                <Feedback />
                ) }
            </div>
        </div>
        <div>
            <SidePanel 
            />
          </div>
      </div>
    </div>
  </section>


}

export default DoctorDetails