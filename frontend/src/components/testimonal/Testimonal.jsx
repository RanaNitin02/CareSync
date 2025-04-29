import 'swiper/css';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {testimonial} from '../../assets/data/testimonal';
import patientAvatar from '../../assets/images/patient-avatar.png';


const Testimonal = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {testimonial.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='py-[30px] px-5 rounded-lg'>
              <div className='flex items-center gap-[13px]'>
                <img src={patientAvatar} alt={testimonial.name} />
                <div>
                  <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                    {testimonial.name}
                  </h4>
                  <div className='flex items-center gap-[2px]'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className='text-yellow-500 w-[18px] h-5' />
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-[16px] leading-7 text-textColor mt-4 font-[400]'>
                "{testimonial.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonal;
