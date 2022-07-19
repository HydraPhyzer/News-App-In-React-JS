import React from 'react'
import './Pagination.css'

const Pagination = () => {
  return (
    <div className='Pagination'>
        <button className='Prev'>
            Prev
        </button>
        <span className='Num'>
            1 of 50
        </span>
        <button className='Next'>
            Next
        </button>
    </div>
  )
}

export default Pagination