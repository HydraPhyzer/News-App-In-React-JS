import React from 'react'
import './Search.css'
import {useGlobalContext} from '../Context'

let Search=()=>
{
    return(
        <div className='Search'>
            <input type="text" placeholder='Type to Search ...'/>
        </div>
    )
}
export default Search