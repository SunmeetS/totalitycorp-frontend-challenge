import React from 'react'

export const Navbar = () => {
    return (
        <div className='mainNavbar'>
            <div className="logoGroup">
                <img src="https://opensea.io/static/images/logos/opensea.svg" alt="" />
                <h2>OpenSea</h2>
            </div>
            <div className="searchGroup">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input placeholder='Search items, collections, and accounts' className='searchBar' type="text" />
            </div>
            <div className="options">
                <h4>Explore</h4>
                <h4>Stats</h4>
                <h4>Resources</h4>
                <h4>Create</h4>
            </div>
            <div className="icons">
                <div className="optionIcons">
                    <i className="fa fa-user"></i>
                    <i className="fa fa-wallet"></i>
                    <i className="fa fa-shopping-cart" ></i>
                </div>
                <i class="fa fa-bars"></i>
            </div>
        </div>
    )
}
