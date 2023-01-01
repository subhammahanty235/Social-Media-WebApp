import React from 'react'
import './sidenav.css'
import User_image from '../../../../images/user_image.png'
import { useEffect } from 'react';
import { useState } from 'react';
import UserCard from '../userCard/UserCard';
function Sidenav(props) {
  const { userdata, pmppage, pmp ,setprofileid } = props;
  // const [pmp , setpmp] = useState(pmppage)
  const profileopenbtn = ()=>{
    setprofileid(userdata.user._id)
    pmppage(2)
  }
  return (
    <div className='sidenav'>

      <div className="container">
        <div className="profile">
          <div className="nameanddp">
            <img src={userdata.user?.profilepic !== null ? userdata.user?.profilepic : "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"} alt="image" />
            <p>{userdata.user?.name}</p>
          </div>
          <button onClick={() => { profileopenbtn() }} className={pmp == 2 ? 'buttonactive-profileshow' : 'buttonnotactive-profileshow'}>Show Profile</button>
        </div>

        <div className="otherbuttons">
          <button className={pmp == 1 ? 'active' : ''} onClick={() => { pmppage(1) }}>Home</button>
          <button data-bs-toggle="modal" data-bs-target="#followersmodal">Followers</button>
          <button data-bs-toggle="modal" data-bs-target="#followingmodal">Followings</button>
          <button onClick={() => { pmppage(3) }} className={pmp == 3 ? 'active' : ''}>My Posts</button>
          <button>Saved</button>
          <button>Log Out</button>
        </div>

      </div>
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary">
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      <div class="modal fade" id="followersmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Followers</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <UserCard/>
              <UserCard/>
              {/* {
                userdata.followers.map((follower)=>{

                })
              } */}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* following */}
      <div class="modal fade" id="followingmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Followings</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav