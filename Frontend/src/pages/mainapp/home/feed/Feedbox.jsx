import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../Profiles/Profile'
import './feedbox.css'
import Myposts from './myposts/Myposts'
import Postnew from './newpost/Postnew'
import Posts from './Posts/Posts'

function Feedbox(props) {
  // const location = useLocation();
  const { userdata ,pmp , setprofileid ,pmppage} = props
  // let page= 2;
    let page = <Posts setprofileid={setprofileid} pmppage={pmppage}/>
    if(pmp == 1){
      page = <Posts setprofileid={setprofileid} pmppage={pmppage} />
      // console.log(location.pathname)
    }
    // else if(pmp == 2){
    //   page = <Profile/>
    // }
    else{
      page = <Myposts/>
    }

  
  return (
    <div className='feedbox'>
      {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal">click</button> */}

      <div className="innerfeedbox">
        <Postnew userdata={userdata}  />
        {
          page
        } 
        {/* <Myposts /> */}
      </div>

    </div>
  )
}

export default Feedbox