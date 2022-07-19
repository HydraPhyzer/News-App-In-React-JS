import React from 'react'
import './Pagination.css'
import { useGlobalContext } from '../Context';

const Pagination = () => {
  let {page,nbPages,Next,Prev} = useGlobalContext();
  return (
    <div className='Pagination'>
        <button className='Prev'onClick={()=>{Prev()}}>
            Prev
        </button>
        <span className='Num'>
            {page+1} of {nbPages}
        </span>
        <button className='Next' onClick={()=>{Next()}}>
            Next
        </button>
    </div>
  )
}

export default Pagination