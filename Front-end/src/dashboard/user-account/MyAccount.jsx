import Profile from './Profile'
import MyBookings from './MyBookings'
import { BASE_URL } from '../../config'
import { useContext, useState } from 'react'
import Error from '../../components/error/Error.jsx'
import useGetProfile from '../../hooks/useFetchData'
import Loading from '../../components/loader/Loading.jsx'
import { authContext } from '../../context/AuthContext'


const MyAccount = () => {

    const { dispatch } = useContext(authContext)

    const [tab, setTab] = useState('bookings')

    const { data: userData, error, loading } = useGetProfile(`${BASE_URL}/users/profile/me`)

    // console.log(userData);


    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    const handleDelete = () => {

    }

    return <section>
        <div className='max-w-[1170px] px-5 mx-auto'>
                {
                    loading && !error && <Loading />
                }
                {
                    error && !loading && <Error errMsg={error} />
                }
                {
                    !loading && !error && (
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="pb-[50px] px-[30px] rounded-md">
                                <div className="flex items-center justify-center">
                                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primary">
                                        <img src={userData.photo} alt="" className="w-full h-full rounded-full" />
                                    </figure>
                                </div>

                                <div className='mt-4 text-center'>
                                    <h3 className='text-[18px] text-headingColor font-bold leading-[30px]'>{userData.name}</h3>
                                    <p className="text-textColor text-[15px] font-medium leading-6">{userData.email}</p>
                                    <p className="text-textColor text-[15px] font-medium leading-6">Blood Type: <span className='text-headingColor text-[22px] leading-8 ml-2'>{userData.bloodType}</span></p>
                                </div>

                                <div className="mt-[50px] md:mt-[100px]">
                                    <button onClick={handleLogout} className='bg-[#181E1A] p-3 text-[16px] rounded-md text-white w-full'>Logout</button> 
                                </div>
                                
                            </div>

                            <div className='md:col-span-2 md:px-[30px]'>
                                <div>
                                    <button onClick={() => setTab('bookings')} className={` ${tab === 'bookings' && 'bg-primary text-white fn-const name = new type(arguments);'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] border border-soid border-primary leading-7`}>My Bookings</button>
                                    <button onClick={() => setTab('settings')} className={` ${tab === 'settings' && 'bg-primary text-white fn-const name = new type(arguments);'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] border border-soid border-primary leading-7`}>Profile Settings</button>
                                </div>

                                {
                                    tab === 'bookings' && <MyBookings />
                                }

                                {
                                    tab === 'settings' && <Profile user={userData}/>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
    </section>

}

export default MyAccount