import { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'

const Tabs = ({tab, setTab}) => {

    const { dispatch } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }

  return (
    <div>
        <span className='lg:hidden'>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
        </span>

        <div className='lg:flex flex-col p-[30px] bg-white shadow-panleShadow items-center h-max rounded-md hidden'>
            <button onClick={() => setTab('overview')} className={`${tab === 'overview' ? 'bg-indigo-100  text-primary' : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>Overview</button>
            <button onClick={() => setTab('appointments')} className={`${tab === 'appointments' ? 'bg-indigo-100 text-primary' : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>Appointments</button>
            <button onClick={() => setTab('settings')} className={`${tab === 'settings' ? 'bg-indigo-100 text-primary' : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>Profile</button>

            <div className='mt-[100px] w-full'>
                <button onClick={handleLogout} className='bg-[#181E1A] p-3 text-[16px] rounded-md text-white w-full'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Tabs