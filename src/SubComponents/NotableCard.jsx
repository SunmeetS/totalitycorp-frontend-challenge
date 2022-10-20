import React from 'react'

export const NotableCard = ({mainImgSrc, tagLine, subImgSrc}) => {
    return (
        <div className='mainNotableCard'>
            <div className="upperNotableCard">
                <img src={mainImgSrc} alt="" />
            </div>
            <div className="lowerNotableCard">
                <img src={subImgSrc} alt="" />
                <h4 style={{textAlign: "center"}}>{tagLine}</h4>
                <i class="fa fa-certificate"></i>
            </div>
        </div>
    )
}
