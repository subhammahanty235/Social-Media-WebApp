import React from 'react'
import './sidenav.css'
import User_image from '../../../../images/user_image.png'
function Sidenav(props) {
  const {userdata , pmppage} = props;
  
  return (
    <div className='sidenav'>

        <div className="container">
        <div className="profile">
            <div className="nameanddp">
                <img src={userdata.user?.profilepic !== null ?userdata.user?.profilepic:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" } alt="image" />
                <p>{userdata.user?.name}</p>
            </div>
            <button>Show Profile</button>
        </div>

        <div className="otherbuttons">
            <button className='active' onClick={()=>{pmppage(1)}}>Home</button>
            <button>Followers</button>
            <button>Followings</button>
            <button onClick={()=>{pmppage(2)}}>My Posts</button>
            <button>Saved</button>
            <button>Log Out</button>
        </div>

        </div>
    </div>
  )
}

export default Sidenav