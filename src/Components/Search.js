import React from 'react'
import './Search.css'
import {useGlobalContext} from '../Context'

let Search=()=>
{
    let {Search}=useGlobalContext();
    return(
        <div className='Search'>
            <input type="text" onChange={(Event)=>{Search(Event.target.value)}} placeholder='Type to Search ...'/>
        </div>
    )
}
export default Search