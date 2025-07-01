import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div className='mt-[120px]'>
      <div className='flex items-center justify-center w-full h-full'>
        <HashLoader color='#0067FF' />
      </div>
    </div>
  )
}

export default Loading