import React from 'react'
import { useGlobalContext } from '../Context'
import './News.css'

const News = () => {
    let { hits, nbPages, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <h3>
                Loading ...
            </h3>
        )
    }
    else {

        return (
            hits.map((Elem, Ind) => {
                return (
                    <div className='News' key={Ind}>
                        <div className="Title">
                            {Elem.title}
                        </div>
                        <div className="Info">
                            <span className='Author'><span>Author: </span>{Elem.author}</span>
                            <span className='Comment'><span>Comments:  </span> {Elem.num_comments} </span>
                        </div>
                        <div className="Foot">
                            <a href={Elem.url} target="_blank" rel="noopener noreferrer">
                                Read More
                            </a>
                            <button>Remove</button>
                        </div>

                    </div>
                )
            })
        )
    }
}

export default News