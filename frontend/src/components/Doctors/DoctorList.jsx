import React from 'react'
import Error from '../error/Error.jsx'
import DoctorCard from './DoctorCard.jsx'
import Loader from '../loader/Loading.jsx'
import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData.jsx'
// import { doctors } from '../../assets/data/doctors.js'

const DoctorList = () => {

    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`)

    return (
        <>
            {loading && <Loader />}
            {error && <Error message={error.message} />}


            {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                {
                    doctors.map(doctor => (
                        <DoctorCard key={doctor._id} doctor={doctor} />
                    ))
                }
            </div>}
        </>
    )
}

export default DoctorList