import { useEffect, useState } from 'react'
import { BASE_URL } from '../../config'
import Error from '../../components/error/Error'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/loader/Loading'
import { authContext } from '../context/AuthContext.jsx'
import DoctorCard from '../../components/doctors/DoctorCard'
import Testimonal from '../../components/testimonal/Testimonal'

const Doctors = () => {

  const [query, setQuery] = useState('')
  const [debounceQuery, setdebounceQuery] = useState('')

  const { user } = useContext(authContext)

  const handleSearch = () => {
    setQuery(query.trim())
    console.log('handle search');
    
  }

  useEffect(() => {

    const timeout = setTimeout(() => {
      setdebounceQuery(query)
    }, 700);

    return () => clearInterval(timeout)
  }, [query])

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

  return <>

    <section className="bg-[#fff9ea] py-6">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-gray-800">Find a Doctor</h2>
        <div className="max-w-[570px] mt-6 mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between shadow-md">
          <input
            type="search"
            className="py-3 px-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-gray-600"
            placeholder="Search doctor by name or specification"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </section>

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

    <section>
      <div className="container">
        {loading && <Loader />}
        {error && <Error message={error.message} />}

        {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
          {
            doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          }
        </div>}
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
