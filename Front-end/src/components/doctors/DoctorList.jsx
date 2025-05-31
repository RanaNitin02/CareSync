import React, { useState } from 'react'
import Error from '../error/Error.jsx'
import DoctorCard from './DoctorCard.jsx'
import Loader from '../loader/Loading.jsx'
import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData.jsx'

const DoctorList = () => {
    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`)
    const [showAll, setShowAll] = useState(false)

    const toggleShow = () => {
        setShowAll(prev => !prev)
    }

    const visibleDoctors = showAll ? doctors : doctors.slice(0, 3)

    return (
        <>
            {loading && <Loader />}
            {error && <Error message={error.message} />}

            {!loading && !error && (
                <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                        {visibleDoctors.map(doctor => (
                            <DoctorCard key={doctor._id} doctor={doctor} />
                        ))}
                    </div>

                    {doctors.length > 3 && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={toggleShow}
                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80"
                            >
                                {showAll ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default DoctorList
