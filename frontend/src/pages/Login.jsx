import { useState, useContext } from 'react'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext.jsx'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const {dispatch} = useContext(authContext)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true)
      
      // api call 
      try {
        
        
        const res = await fetch(`${BASE_URL}/auth/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
  
        const result = await res.json()
  
        if(!res.ok){
          throw new Error(result.message)
        }

        dispatch({ 
          type: 'LOGIN_SUCCESS', 
          payload: {
            user: result.data,
            token: result.token,
            role: result.role,
          } 
        })

        // console.log("Login data: ", result);
        

        setLoading(false)
        toast.success(result.message)
        navigate("/home")
  
      } catch (error) {
          toast.error(error.message)
          setLoading(false);
      }     
    }
  
  return (
    <section className='px-5 lg:px-0 sm:mt-10 '>
      <div className='w-full max-w-[570px] mx-auto rounded-lg font-bold shadow-lg md:p-10 '>
        <h3 className='text-headingColor text-[22px] ld-9 font-bold mb-10 '>
          Hello! <span className='text-primary'>Welcome Back 🎉</span>
        </h3>

        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input
              type="email"
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor cursor-pointer'
              required
            />
          </div>

          <div className='mb-5'>
            <input
              type="password"
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor cursor-pointer'
              required
            />
          </div>

          <div className="mt-7">
            <button
              type='submit'
              className='w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
            >
              { loading ? <HashLoader size={35} color='#ffffff'/> : 'Login' }
            </button>
          </div>

          <p className='mt-5 text-textColor'>
            Don&apos;t have an account? <Link to='/register' className='text-primary font-medium mt-2'>Register</Link>
          </p>

        </form>
      </div>
    </section>
  )
}

export default Login