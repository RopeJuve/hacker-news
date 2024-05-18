import React from 'react'

const Loader = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-center'>
        <div className="w-24 h-24 border-4 border-black border-dashed rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader