import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Feedbox from './feed/Feedbox'
import './home.css'
import Sidenav from './sidebar/Sidenav'
import {useLocation} from 'react-router-dom'
function Home() {
    // let location = useLocation();
    // useEffect(()=>{
    //     console.log(location)
    // })
    return (
        <>
        
        <div className="mainbody">

        <div className='homescreen'>
            <Navbar />
        
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
</>

    )
}

export default Home