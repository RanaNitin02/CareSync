import React from 'react'
import { toast } from 'react-toastify'
import convertTime from '../../utils/convertTime'

const SidePanel = () => {

    const bookingHandler = async () => {


    }

    return (
        <div className='shadow-panleShadow p-3 lg:p-5 rounded-md '>
            <div className="flex items-center justify-between">
                <p className="text_para mt-0 font-semibold">
                    Ticket Price
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>500 USD</span>
            </div>

            <div className="mt-[30px]">
                <p className="text_para mt-0 font-semibold  text-headingColor">
                    Available Time Slots
                </p>

                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>Monday</p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:00 PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>Wednesday</p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:00 PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>Friday</p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:00 PM</p>
                    </li>
                </ul>
            </div>

            <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>Book Appointment</button>

        </div>
    )
}

export default SidePanel