import React from 'react'
import { toast } from 'react-toastify'
import { BASE_URL, token } from '../../config'
import convertTime from '../../utils/convertTime'

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {

    const bookingHandler = async () => {
        try {
           console.log("Token:", token)
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.json()

            if(!res.ok){
                throw new Error(data.message + ", " + ' Please try again!')
            }

            if(data.session.url){
                window.location.href = data.session.url
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='shadow-panleShadow p-3 lg:p-5 rounded-md '>
            <div className="flex items-center justify-between">
                <p className="text_para mt-0 font-semibold">
                    Ticket Price
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>{ticketPrice} USD</span>
            </div>

            <div className="mt-[30px]">
                <p className="text_para mt-0 font-semibold  text-headingColor">
                    Available Time Slots
                </p>

                <ul className="mt-3">
                    {
                        timeSlots?.map((item, index) => {
                            return <li key={index} className="flex items-center justify-between mb-2">
                                <p className='text-[15px] leading-6 text-textColor font-semibold'>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
                                <p className='text-[15px] leading-6 text-textColor font-semibold'>{item.startingTime} a.m. - {item.endingTime} p.m.</p>
                            </li>
                        })
                    }
                </ul>
            </div>

            <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>Book Appointment</button>

        </div>
    )
}

export default SidePanel