import { BiMenu } from 'react-icons/bi'
import { useContext, useEffect, useRef } from 'react'
import logo from '../../assets/images/CareSyncLogo.png'
import { authContext } from '../../context/AuthContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },

];

const Header = () => {


  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  const { user, role, token } = useContext(authContext)

  const handleStickyHeader = () => {

    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => {
      window.removeEventListener('scroll', handleStickyHeader)
    }
  })

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu')
  }

  return (
    <header className="header shadow-md flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img onClick={() => navigate('/')} src={logo} alt="" className=' w-64 cursor-pointer' />
          </div>

          {/*---------- menu ----------*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primary text-[16px] leading-7 font-[700] ' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primary '}>{link.display}</NavLink>
                </li>)
              }
            </ul>
          </div>

          {/*---------- nav right ----------*/}
          <div className="flex items-center
         gap-4">

            {
              token && user ? <div>
                <Link 
                  to={`${
                    role === 'doctor' 
                      ? '/doctors/profile/me' 
                      : '/users/profile/me'
                    }`
                  }
                >
                  <figure
                    className='w-[45px] h-[45px] rounded-full cursor-pointer'
                    title={user?.name}
                  >
                    <img src={user?.photo} className='w-full h-full rounded-full' />
                  </figure>
                </Link>
              </div>
                :
                <Link to='/login'>
                  <button className='bg-primary py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
                </Link>
            }

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header