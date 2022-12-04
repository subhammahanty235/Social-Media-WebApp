import React from 'react'
import './sidenav.css'
function Sidenav() {
  return (
    <div className='sidenav'>

        <div className="container">
        <div className="profile">
            <div className="nameanddp">
                <img src="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/314645764_1545955799189269_6229667795802265980_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RZRYbzBtyEQAX9i47Zy&_nc_ht=scontent.fixr3-2.fna&oh=00_AfB6GDC7sgqFIvEgdCZxkAdasdcb2LcNc2ez8lviiIN0CA&oe=6391A923" alt="" />
                <p>Subham Mahanty</p>
            </div>
            <button>Show Profile</button>
        </div>

        <div className="otherbuttons">
            <button className='active'>Home</button>
            <button>Followers</button>
            <button>Followings</button>
            <button>My Posts</button>
            <button>Saved</button>
        </div>

        </div>
    </div>
  )
}

export default Sidenav