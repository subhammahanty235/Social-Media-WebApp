import React from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import './navbar.css'
function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    Xorin
                </div>
            <div className="sidebarbtn">
                <TiThMenuOutline/>
            </div>
            </nav>
        </div>
        
    )
}

export default Navbar