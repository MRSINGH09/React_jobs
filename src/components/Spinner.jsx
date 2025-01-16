import React from 'react'
import {TailSpin} from 'react-loader-spinner'

function Spinner() {
  return (
    <div className='h-full w-full flex justify-center align-middle'>
        <TailSpin/>
    </div>
  )
}

export default Spinner