import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'


const Profile = ({user}) => {

    const [selectedFile, setselectedFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      photo: null,
      gender: '',
      bloodType: '',

    })

    const navigate = useNavigate()

    useEffect(() => {
        setFormData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType })
    },[])
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFileInputChange = async(e) => {

      const file = e.target.files[0];

      // use cloudinary to upload image
      const data = await uploadImageToCloudinary(file);

      setselectedFile(data.url)
      setFormData({ ...formData, photo: data.url }) 
      
    }

    const submitHandler = async(e) => {
      e.preventDefault();
      setLoading(true)

      try {
        
        const res = await fetch(`${BASE_URL}/users/${user._id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        })
        
        const {message} = await res.json()

        if(!res.ok){
          throw new Error(message)
        }

        setLoading(false)
        toast.success(message)
        navigate('/users/profile/me')

      } catch (error) {
        toast.error(error.message)
        setLoading(false);
      }
      
    }

    return (
        <div className='mt-10'>
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
                        aria-readonly
                        readOnly
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
                        
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder='Blood Type'
                        name='bloodType'
                        value={formData.bloodType}
                        onChange={handleInputChange}
                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor cursor-pointer'
                        required
                    />
                </div>

                <div className="flex items-center justify-between mb-5">

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
                        formData.photo &&
                        <figure className='h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center w-[60px]'>
                            <img src={formData.photo} className='w-full rounded-full' />
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
                            { selectedFile ? selectedFile.name : 'Upload photo' }
                        </label>
                    </div>
                </div>

                <div className="mt-7">
                    <button
                        disabled={loading && true}
                        type='submit'
                        className='w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                    >
                        {loading ? <HashLoader size={35} color='#ffffff' /> : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Profile