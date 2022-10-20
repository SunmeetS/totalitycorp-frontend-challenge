import React, { useRef } from 'react'
import { CollectionComponent } from './CollectionComponent'

export const Collections = () => {

    let top = useRef(null)
    let trending = useRef(null)
    return (
        <div className='mainCollections'>
            <div className="navMainCollections">
                <div className="filter1">
                    <h1 onClick={() => {
                        trending.current.classList.add("active")
                        trending.current.classList.remove("inactive")
                        top.current.classList.add("inactive")

                        console.log(trending.current.classList)
                    }} ref={trending} className='active'>Trending</h1>
                    <h1 onClick={() => {
                        top.current.classList.add("active")
                        top.current.classList.remove("inactive")
                        trending.current.classList.add("inactive")


                        console.log(top.current.classList)
                    }}  ref={top} className='inactive'>Top</h1>
                </div>
                <div className="filter2">
                    <select name="" id="">
                        <option value="24h">24h</option>
                    </select>
                    <button>View all</button>
                </div>
            </div>
            <div className="collectionComponentGroup">
                <CollectionComponent />
                <CollectionComponent />
            </div>
        </div>
    )
}
