import React from 'react'
import { CollectionListItem } from '../SubComponents/CollectionListItem'

export const CollectionComponent = () => {
  return (
    <div className='mainCollectionComponent'>
        <div className="collectionComponentNav">
            <p>COLLECTION</p>
            <div className="headingGroupCollectionComponent">
                <p>FLOOR PRICE</p>
                <p>VOLUME</p>
            </div>
        </div>
        <div>
        <CollectionListItem/><CollectionListItem/><CollectionListItem/>
            <CollectionListItem/><CollectionListItem/>
        </div>
    </div>
  )
}
