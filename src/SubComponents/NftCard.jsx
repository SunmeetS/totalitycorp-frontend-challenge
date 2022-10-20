import React from 'react'

export const NftCard = ({imgSrc,name, description, nameStyle}) => {
  return (
    <div className='mainNftCard'>
        <img src={imgSrc} />
        <div className="description">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}
