import { useState } from 'react'
import FeedbackForm from './FeedbackForm'
import { AiFillStar } from 'react-icons/ai'
import { formateDate } from '../../utils/formateDate'
import avatar from '../../assets/images/avatar-icon.png'

const Feedback = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false)

    return (
        <div>
            <div className="mb-[50px]">
                <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
                    All reviews (232)
                </h4>

                <div className="flex justify-b gap-10 mb-[30px]">
                    <div className='flex gap-3'>
                        <figure className="w-10 h-10 rounded-full">
                            <img src={avatar} className='w-full' alt="" />
                        </figure>

                        <div>
                            <h4 className='text-[16px] leading-6 text-primary font-bold '>Suraj Kumar</h4>
                            <p className="text-[14px] leading-6 text-textColor">
                                {formateDate("12-02-2015")}
                            </p>
                            <p className="text_para mt-3 font-medium text-[15px] ">
                                Good service, highly recommended
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        {
                            [...Array(5).keys()].map((_, index) => <AiFillStar key={index} className='text-yellowColor' />)
                        }
                    </div>
                </div>
            </div>

            {
                !showFeedbackForm && (
                    <div className="text-center">
                        <button onClick={() => setShowFeedbackForm(true)} className="btn">
                            Give Feedback
                        </button>
                    </div>
                )
            }
            {
                showFeedbackForm && <FeedbackForm />
            }
        </div>
    )
}

export default Feedback