import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonal from '../../components/testimonal/Testimonal'

const Doctors = () => {
  return <>

    <section className="bg-[#fff9ea] py-6">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-gray-800">Find a Doctor</h2>
        <div className="max-w-[570px] mt-6 mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between shadow-md">
          <input
            type="search"
            className="py-3 px-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-gray-600"
            placeholder="Search doctor by name or specification"
            // value={query}
            // onChange={e => setQuery(e.target.value)}
          />
          <button  className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </section>

    <section>
        <div className="container">

          

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {
                doctors.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor} />
                ))
            }
          </div>
        </div>
      </section>

      <section>
            <div className="container">
              <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>What our patients say</h2>
                <p className='text__para text-center'>World-classcare for everyone. Our health system offers unmatched, expert health care.</p>
              </div>

              <Testimonal />
            </div>
      </section>

  </>

}

export default Doctors