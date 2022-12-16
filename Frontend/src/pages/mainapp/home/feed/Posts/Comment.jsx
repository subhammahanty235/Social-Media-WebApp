import React from 'react'
import { useEffect } from 'react';
import './posts.css'
function Comment(props) {
  // const { cmt } = props;
 
  return (
    <div>
        {/* <div className="commentcont" onClick={()=>console.log(cmt)}>
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="" className="dp" />
            <div className="maincont">
                <div className="innermaincont">

                <p className="name">
                    {cmt?.commentedBy}  <span></span>
                </p>
                <p className="content">
                    {cmt?.comment}
                </p>
                </div>
            </div>
        </div> */}
        <div className="commentcont">
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="" className="dp" />
            <div className="maincont">
                <div className="innermaincont">

                <p className="name">
                    cmt?.commentedBy <span></span>
                </p>
                <p className="content">
                    mt?.comment
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment