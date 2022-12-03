import React from 'react'
import Navbar from '../navbar/Navbar'
import Feedbox from './feed/Feedbox'
import './home.css'
import Sidenav from './sidebar/Sidenav'
function Home() {
    return (

        <div className="mainbody">

        <div className='homescreen'>
            <div className="nv">

            <Navbar />
            </div>

            <div className="oth">

                <div className="feedboxarea">
                    <Feedbox />
                </div>
                <div className="sidebararea">
                    <Sidenav />
                </div>
            </div>
        </div>
        </div>


    )
}

export default Home