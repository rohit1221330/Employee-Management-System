import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className=' flex-shrink-0 h-full w-[250px] bg-yellow-400 rounded-xl p-5' >
        <div className='flex items-center justify-between'>
            <h3 className='px-3 py-1 text-sm bg-red-600 rounded'> {data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='mt-2 text-sm'> {data.description}
        </p>
         <div className='mt-2'>
            <button className='w-full'>Failed</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
