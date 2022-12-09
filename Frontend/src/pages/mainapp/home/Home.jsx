import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Feedbox from './feed/Feedbox'
import './home.css'
import Sidenav from './sidebar/Sidenav'
import {useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react'
function Home() {
    const navigate = useNavigate()
    // let location = useLocation();
    // useEffect(()=>{
    //     console.log(location)
    // })
    const [userdata , setuserdata] = useState({})
    const [pmppage , setpmppage] = useState(1);

    const pnp_change = (n)=>{         //it will help swiching between all posts and my posts page
        setpmppage(n);
        // console.log(pmppage)
    }
    useEffect(()=>{
        if(!localStorage.getItem('sclmdia_73sub67_token')){
                navigate('/login')
        }
        else{
          async function getdata(){
            const mydetails = JSON.parse(localStorage.getItem('sclmdia_73sub67_details'));
            // let mydetails2= await mydetails.json()
            console.log(mydetails)
            const data = await fetch(`http://localhost:5000/api/auth/getdata/${mydetails._id}`,{
              method:"GET",
              headers: {
                'Content-Type': 'application/json'
            },
    
          })
          const data2 = await data.json();
          setuserdata(data2)
          }
          
          getdata();
        }
    },[])
    return (
        <>
        
        <div className="mainbody">

        <div className='homescreen'>
            <Navbar />
        
            <div className="oth">

                <div className="feedboxarea">
                    <Feedbox userdata={userdata} pmp={pmppage}/>
                </div>
                <div className="sidebararea">
                    <Sidenav userdata={userdata} pmppage={pnp_change}/>
                </div>
            </div>
        </div>
        </div>
</>

    )
}

export default Home