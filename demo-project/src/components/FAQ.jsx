// eslint-disable-next-line no-unused-vars
import React from 'react'

const FAQ = () => {
  return (
    <div className='flex flex-col mb-10 items-center mt-16'>
      <div className='text-4xl font-bold mb-5'>Frequently Asked Questions</div>
      <div className='w-3/4 space-y-4'>
        <div className='border p-4 rounded-md'>
          <h2 className='font-bold text-xl'>Question 1</h2>
          <p className='mt-2'>Answer to question 1...</p>
        </div>
        <div className='border p-4 rounded-md'>
          <h2 className='font-bold text-xl'>Question 2</h2>
          <p className='mt-2'>Answer to question 2...</p>
        </div>
        <div className='border p-4 rounded-md'>
          <h2 className='font-bold text-xl'>Question 3</h2>
          <p className='mt-2'>Answer to question 3...</p>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ