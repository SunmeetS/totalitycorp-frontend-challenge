import React from 'react'

export const Footer = () => {
    return (
        <div className='mainFooter'>
            <div className="topFooter">
                <div className="leftTopFooter">
                    <h4>Stay in the loop</h4>
                    <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                    <div className="emailGroup">
                        <input placeholder='Your email address' type="email" className="email" />
                        <button>Sign up</button>
                    </div>
                </div>
                <div className="rightTopFooter">
                    <h4>Join the community</h4>
                    <div className="mediaIcons">
                    <i class="fa fa-twitter" ></i>                    <i class="fa fa-twitter" ></i>
                    <i class="fa fa-twitter" ></i>
                    <i class="fa fa-twitter" ></i>
                    <i class="fa fa-twitter" ></i>
                    <i class="fa fa-twitter" ></i>
                    <i class="fa fa-twitter" ></i>
                    <i class="fa fa-twitter" ></i>

                    </div>
                </div>
            </div>
            <div className="middleFooter">
                <div className='leftMiddleFooter'>
                    <img src="https://opensea.io/static/images/logos/opensea-white.svg" alt="" />
                    <h3>OpenSea</h3>
                    <p>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                </div>
                <div className='rightMiddleFooter'>
                    <div>
                        <h4>Marketplace</h4>
                        <div>
                            <p>All Nfts</p><p>All Nfts</p><p>All Nfts</p>
                            <p>All Nfts</p><p>All Nfts</p><p>All Nfts</p>
                            <p>All Nfts</p><p>All Nfts</p><p>All Nfts</p>
                            <p>All Nfts</p><p>All Nfts</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>My Account</h4>
                            <p>All Nfts</p><p>All Nfts</p><p>All Nfts</p><p>All Nfts</p><p>All Nfts</p>
                        </div>
                        <div>
                            <h4>Stats</h4>
                            <p>All Nfts</p> <p>All Nfts</p>
                        </div>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <div>
                            <p>All Nfts</p><p>All Nfts</p><p>All Nfts</p>
                            <p>All Nfts</p><p>All Nfts</p><p>All Nfts</p>
                            <p>All Nfts</p><p>All Nfts</p>
                        </div>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <div>
                            <p>All Nfts</p> <p>All Nfts</p> <p>All Nfts</p>
                            <p>All Nfts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="endFooter">
                <p>© 2018 - 2022 Ozone Networks, Inc</p>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    )
}
