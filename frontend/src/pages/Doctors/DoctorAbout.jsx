import React from 'react'
import { formateDate } from '../../utils/formateDate.js'

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <div>
                    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 '>
                        About of
                        <span className='text-irisBlueColor font-bold text-[24px] leading-9 '>
                            Rahul, pages.doctorAbout
                        </span>
                    </h3>
                    <p className="text_para text-black">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, rem!
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
                        Education
                    </h3>

                    <ul className="pt-4 md:p-5">
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                            <div>
                                <span className="leading-6 text-irisBlueColor text-[15px] font-semibold">
                                    {formateDate("09-07-2015")} - {formateDate("09-04-2017")}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                            </div>
                            <p className="leading-5 text-[14px] font-medium text-textColor">New Apollo Hospital, New York</p>
                        </li>

                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                            <div>
                                <span className="leading-6 text-irisBlueColor text-[15px] font-semibold">
                                    {formateDate("12-03-2010")} - {formateDate("12-05-2012")}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                            </div>
                            <p className="leading-5 text-[14px] font-medium text-textColor">New Apollo Hospital, New York</p>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
                        Experience
                    </h3>

                    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
                        <li className="p-4 rounded bg-[#fff9ea]">
                                <span className="text-yellowColor text-[15px] leading-6 font-semibold "> {formateDate("09-07-2015")} - {formateDate("09-04-2017")}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor '>Senior Surgeon</p>
                                <p className="leading-5 text-[14px] font-medium text-textColor ">New Apollo Hospital</p>
                        </li>
                        <li className="p-4 rounded bg-[#fff9ea]">
                                <span className="text-yellowColor text-[15px] leading-6 font-semibold "> {formateDate("09-07-2015")} - {formateDate("09-04-2017")}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor '>Senior Surgeon</p>
                                <p className="leading-5 text-[14px] font-medium text-textColor ">New Apollo Hospital</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DoctorAbout