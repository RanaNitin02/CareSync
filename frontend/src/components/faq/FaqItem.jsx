import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex items-center justify-between gap-5'>
        <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
          {item.question}
        </h4>
        <div
          className={`w-7 lg:w-8 lg:h-8 flex items-center justify-center rounded transition-all duration-300 
          ${isOpen ? "bg-primary text-white border-none" : "border border-solid border-[#141F21]"}`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <p className='mt-3 text-gray-600 text-[14px] lg:text-[16px] leading-6 lg:leading-7'>
          {item.content}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
