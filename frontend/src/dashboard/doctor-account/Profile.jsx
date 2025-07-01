import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { BASE_URL, token } from '../../config'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'

const Profile = ({doctorData}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: '',
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: '',
    photo: null
  })

  const [isInitialized, setIsInitialized] = useState(false);

useEffect(() => {
  if (doctorData && !isInitialized) {
    setFormData({
      name: doctorData.name || '',
      email: doctorData.email || '',
      phone: doctorData.phone || '',
      bio: doctorData.bio || '',
      gender: doctorData.gender || '',
      specialization: doctorData.specialization || '',
      ticketPrice: doctorData.ticketPrice || 0,
      qualifications: doctorData.qualifications || [],
      experiences: doctorData.experiences || [],
      timeSlots: doctorData.timeSlots || [],
      about: doctorData.about || '',
      photo: doctorData.photo || ''
    });
    setIsInitialized(true);
  }
}, [doctorData, isInitialized]);


  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileInputChange = async(event) => {

    const file = event.target.files[0]
    const data = await uploadImageToCloudinary(file)
    setFormData({...formData, photo: data?.url})
  }

  const updateProfileHandler = async (e) => {

    e.preventDefault();

    try {
      
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
        method: 'put',
        headers: {'content-type':'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if(!res.ok){
        throw Error(result.message)
      }

      toast.success(result.message)

    } catch (error) {
      toast.error(error.message,'Doctor Profile')
    }
  }

  const addItem = (key, item) => {
    setFormData(prevFormData => ({...prevFormData, [key] : [...prevFormData[key], item]}))
  }

  const deleteItem = (key, index) => {

    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index)
    }));
  }

  const handleResuableInputChangeFunction = (key, index, event) => {

    const {name, value} = event.target

    setFormData(prevFormData => {
      const updateItems = [...prevFormData[key]]

      updateItems[index][name] = value

      return {
        ...prevFormData,
        [key]: updateItems
      }
    })
  }

  const addQualification = e => {

    e.preventDefault();

    addItem("qualifications",{ startingDate: "", endingDate: "", degree: "PHD", university: "Nothern Medical College"})
  }


  const handleQualificationChange = (event, index) => {

    handleResuableInputChangeFunction('qualifications', index, event)
  }

  const deleteQualification = (e, index) => {

    e.preventDefault();

    deleteItem("qualifications", index)
  }

  const addExperience = e => {

    e.preventDefault();

    addItem("experiences",{ startingDate: '', endingDate: '', position: 'Senior Surgeon', hospital: 'Nothern Medical College' })
  }


  const handleExperienceChange = (event, index) => {

    handleResuableInputChangeFunction('experiences', index, event)
  }

  const deleteExperience = (e, index) => {

    e.preventDefault();

    deleteItem("experiences", index)
  }

  const addTimeSlot = e => {

    e.preventDefault();

    addItem("timeSlots",{ day: "Sunday", startingTime: "10:00", endingTime: "04:30" })
  }


  const handleTimeSlotChange = (event, index) => {

    handleResuableInputChangeFunction('timeSlots', index, event)
  }

  const deleteTimeSlot = (e, index) => {

    e.preventDefault();

    deleteItem("timeSlots", index)
  }

  return (
    <div>
      <h2 className="text-headingColor text-[24px] leading-9 mb-10 font-bold">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Full Name'
            className='form__input'
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="text"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            className='form__input'
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Phone'
            className='form__input'
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name='bio'
            value={formData.bio}
            onChange={handleInputChange}
            placeholder='Bio'
            className='form__input'
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className='form__input py-3.5'
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className='form__input py-3.5'
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="pediatrician">Pediatrician</option>
                <option value="gynecologist">Gynecologist</option>
                <option value="orthopedic">Orthopedic</option>
              </select>
            </div>

            <div>
              <p className='form__label'>Ticket Price*</p>
              <input
                type="number"
                name="ticketPrice"
                placeholder='100'
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className='form__input'
              />
            </div>
          </div>
        </div>

        {/*---------- qualifications ----------*/}
        <div className="mb-5">
          <p className='form__label font-bold text-headingColor'>Qualifications*</p>
          {
            formData.qualifications?.map((item, index) => (<div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      onChange={e => handleQualificationChange(e, index)}
                      className='form__input'
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      onChange={e => handleQualificationChange(e, index)}
                      className='form__input'
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      onChange={e => handleQualificationChange(e, index)}
                      className='form__input'
                    />
                  </div>
                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      onChange={e => handleQualificationChange(e, index)}
                      className='form__input'
                    />
                  </div>
                </div>

                <button onClick={e => deleteQualification(e, index)} className='p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer bg-red-600'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            ))}
          <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Qualification
          </button>

        </div>

        {/*---------- experiences ----------*/}
        <div className="mb-5">
          <p className='form__label font-bold text-headingColor'>Experiences*</p>
          {
            formData.experiences?.map((item, index) => (<div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      onChange={e => handleExperienceChange(e, index)}
                      className='form__input'
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      onChange={e => handleExperienceChange(e, index)}
                      className='form__input'
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      onChange={e => handleExperienceChange(e, index)}
                      className='form__input'
                    />
                  </div>
                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      onChange={e => handleExperienceChange(e, index)}
                      className='form__input'
                    />
                  </div>
                </div>

                <button onClick={e => deleteExperience(e, index)} className='p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer bg-red-600'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            ))}
          <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Experience
          </button>

        </div>

        {/*---------- time slots ----------*/}
        <div className="mb-5">
          <p className='form__label font-bold text-headingColor'>Time Slots*</p>
          {formData.timeSlots?.map((item, index) => <div key={index}>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                <div>
                  <p className="form__label">Day*</p>
                  <select name="day" value={item.day} className='form__input py-3.5' onChange={e => handleTimeSlotChange(e, index)}>
                    <option value="">Select</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </div>
                <div>
                  <p className="form__label">Starting Time*</p>
                  <input type="time" name="startingTime" value={item.startingTime} className='form__input' onChange={e => handleTimeSlotChange(e, index)} />
                </div>
                <div>
                  <p className="form__label">Ending Time*</p>
                  <input type="time" name="endingTime" value={item.endingTime} className='form__input' onChange={e => handleTimeSlotChange(e, index)} />
                </div>
                <div className='flex items-center'>
                  <button onClick={e => deleteTimeSlot(e, index)} className='p-2 rounded-full text-white text-[18px] mt-10 mb-[30px] cursor-pointer bg-red-600'>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>

            </div>
          </div>
          )}
          <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Time Slots
          </button>
        </div>

        {/*---------- about ----------*/}
        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea 
            onChange={handleInputChange} 
            name="about" 
            rows={5} 
            value={formData.about} 
            placeholder='Write about you' 
            className='form__input'></textarea>
        </div>

        {/*---------- profile photo ----------*/}
        <div className="mb-5 flex items-center gap-x-2">
          {
            formData.photo &&
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center overflow-hidden">
              <img
                src={formData.photo}
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
          <button type='submit' onClick={updateProfileHandler} className='bg-primary text-white text-[16px] leading-[30px] w-full py-3 px-4 rounded-lg'>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile