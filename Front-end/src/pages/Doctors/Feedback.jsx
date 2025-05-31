import { useState } from 'react'
import FeedbackForm from './FeedbackForm'
import { AiFillStar } from 'react-icons/ai'
import { formateDate } from '../../utils/formateDate'
import avatar from '../../assets/images/avatar-icon.png'

const Feedback = ({ reviews, totalRating }) => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false)

    return (
        <div>
            <div className="mb-[50px]">
                <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
                    All reviews ({totalRating})
                </h4>

                {reviews?.map((review, index) => {
                    return <div key={index} className="flex justify-b gap-10 mb-[30px]">
                        <div className='flex gap-3'>
                            <figure className="w-10 h-10 rounded-full">
                                <img src={review.user?.photo} className='w-full' alt="" />
                            </figure>

                            <div>
                                <h4 className='text-[16px] leading-6 text-primary font-bold '>{review.user?.name}</h4>
                                <p className="text-[14px] leading-6 text-textColor">
                                    {formateDate(review?.createdAt)}
                                </p>
                                <p className="text_para mt-3 font-medium text-[15px] ">
                                    {review.reviewText}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-1">
                            {
                                [...Array(review?.rating).keys()].map((_, index) => <AiFillStar key={index} className='text-yellowColor' />)
                            }
                        </div>
                    </div>
                })}
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