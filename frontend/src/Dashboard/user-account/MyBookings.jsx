import {BASE_URL} from '../../config'
import Error from '../../components/Error/Error.jsx'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../../components/Loader/Loading.jsx'
import DoctorCard from '../../components/Doctors/DoctorCard'

const MyBookings = () => {

    const {data: appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMsg={error} />}

        {
            !loading && !error && ( <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    appointments.map(doctor => (
                        <DoctorCard key={doctor._id} doctor={doctor} />
                    ))
                }
            </div>
        )}

        { !loading && !error && appointments.length === 0 && (
            <h2 className='text-center leading-7 text-[20px] font-semibold text-primary mt-5'>You did not book any doctors yet!</h2>
        ) }
    </div>
  )
}

export default MyBookings