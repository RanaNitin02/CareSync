import { useState } from 'react'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
import signupImg from '../assets/images/signup.gif'
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary';


const Signup = () => {

  const [selectedFile, setselectedFile] = useState(null)
  const [previewURL, setpreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (e) => {

    const file = e.target.files[0]
    const data = await uploadImageToCloudinary(file)
    console.log(data);
    setpreviewURL(data.url)
    setselectedFile(data.url)
    setFormData({ ...formData, photo: data.url })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    // api call 
    try {
      console.log(BASE_URL);
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate("/login")

    } catch (error) {
        toast.error(error.message)
        setLoading(false);
    }     
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primary rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} className='w-full rounded-l-lg' />
            </figure>
          </div>

          <div className='lg:pl-10 rounded-l-lg'>
            <h3 className='text-headingColor text-[22px] font-bold mb-10 leading-9'>
              Create an <span className='text-primary'>account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="name"
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor cursor-pointer'
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder='Enter you email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor cursor-pointer'
                  required
                />
              </div>
              <div className="mb-5">
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

              <div className="flex items-center justify-between mb-5">

                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select name="role" value={formData.role}
                  onChange={handleInputChange} className='font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none text-textColor'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select name="gender" value={formData.gender}
                  onChange={handleInputChange} className='font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none text-textColor'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
              {
                  selectedFile && 
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center overflow-hidden">
                    <img
                      src={previewURL}
                      className="w-full h-full object-cover"
                      alt="Profile Preview"
                    />
                  </figure>
                }

                <div className='w-[130px] h-[50px] relative'>
                  <input 
                    type="file" 
                    name="photo" 
                    id='customFile' 
                    accept='.jpg, .jpeg, .png' 
                    onChange={handleFileInputChange}
                    className='top-0 left-0 w-full h-full opacity-0 cursor-pointer absolute' 
                  />
                  <label 
                    htmlFor="customFile" 
                    className='top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer absolute'
                  >
                    Upload photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type='submit'
                  className='w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                >
                  { loading ? <HashLoader size={35} color='#ffffff' /> : 'Sign Up' }
                </button>
              </div>

              <p className='mt-5 text-textColor'>
                Already have an account? <Link to='/login' className='text-primary font-medium mt-2'>Login</Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup