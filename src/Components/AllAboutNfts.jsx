import React from 'react'
import { NftCard } from '../SubComponents/NftCard'

export const AllAboutNfts = () => {
  return (
    <div>
        <h1>Explore, Collect, and Sell NFTs</h1>
        <div className="allAboutNftsGroup">
            <NftCard description={"Floor: 0.05 ETH"} name={"Give me to the dog"} imgSrc="https://i.seadn.io/gcs/static/promocards/Give%20me%20to%20the%20dog.png?auto=format&w=1920"/>
            <NftCard description={"Floor: 0.04 ETH"} name="Streets by esraeslen" imgSrc="https://i.seadn.io/gcs/static/promocards/Streets.png?auto=format&w=828"/>
            <NftCard description={"Floor: 0.9 ETH"} name={"Ometti"} imgSrc="https://i.seadn.io/gcs/static/promocards/Ometti.png?auto=format&w=828"/>
            <NftCard description={"Floor: 0.9 ETH"} name={"Ometti"} imgSrc="https://i.seadn.io/gcs/static/promocards/Ometti.png?auto=format&w=828"/> 
        </div>
    </div>
  )
}
