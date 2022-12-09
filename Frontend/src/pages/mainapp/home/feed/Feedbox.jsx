import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import './feedbox.css'
import Myposts from './myposts/Myposts'
import Postnew from './newpost/Postnew'
import Posts from './Posts/Posts'

function Feedbox(props) {
  const location = useLocation();
  const { userdata ,pmp  } = props
  // let page= 2;
    let page = <Posts/>
    if(pmp == 1){
      page = <Posts/>
      // console.log(location.pathname)
    }
    else{
      page = <Myposts/>
    }
  
  return (
    <div className='feedbox'>
      {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal">click</button> */}

      <div className="innerfeedbox">
        <Postnew userdata={userdata} />
        {
          page
        } 
        {/* <Myposts /> */}
      </div>

    </div>
  )
}

export default Feedbox