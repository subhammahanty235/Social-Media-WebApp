import React from 'react'
import './postnew.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages ,faVideoCamera } from '@fortawesome/free-solid-svg-icons'
function Postnew() {
    const style2 = {color: "#1ba94c", fontSize: "1.5em", "margin":"0px 3px" }
  return (
    <div className='newpostarea'>
        <div className="container my-2">
            <div className="dpandinput">
                <img src="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/314645764_1545955799189269_6229667795802265980_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RZRYbzBtyEQAX9i47Zy&_nc_ht=scontent.fixr3-2.fna&oh=00_AfB6GDC7sgqFIvEgdCZxkAdasdcb2LcNc2ez8lviiIN0CA&oe=6391A923" alt="dp" className="dp" />
                <input type="text" className="postinput" placeholder="Share , What's happening in your life" />
            </div>
            <hr className="posthr mt-2" />
            <div className="photoandvideo">
                <button><FontAwesomeIcon icon={faImages} style={style2} />Photo</button>
                <button> <FontAwesomeIcon icon={faVideoCamera} style={style2} />Video</button>
            </div>
        </div>
    </div>
  )
}

export default Postnew