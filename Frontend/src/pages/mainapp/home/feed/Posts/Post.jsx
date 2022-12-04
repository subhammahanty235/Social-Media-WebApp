import React, { useEffect } from 'react'
import {GrLike} from 'react-icons/gr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots , faShare} from '@fortawesome/free-solid-svg-icons'
function Post(props) {
    const { image , textcontent } = props;
    useEffect(()=>{
        console.log(image);

    },[])
    const style = { color: "green", fontSize: "1.5em", "margin":"2px"}
    const style2 = {color: "grey", fontSize: "1.5em", "margin":"0px 3px" }
    return (
        <div className='post'>
            <div className="postbyinfo">
                <img src="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/314645764_1545955799189269_6229667795802265980_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RZRYbzBtyEQAX9i47Zy&_nc_ht=scontent.fixr3-2.fna&oh=00_AfB6GDC7sgqFIvEgdCZxkAdasdcb2LcNc2ez8lviiIN0CA&oe=6391A923" alt="dp" />
                <div className="nameanddate">
                    <p>Subham Mahanty</p>
                    <small className="timeline">
                        2th october
                    </small>

                </div>

            </div>
            <hr className='posthr' />
            <div className="content">
                {
                <div className="container">
                    {
                        textcontent?<p>{textcontent}</p>:""
                    }
                    
                </div>

                }
                
                {
                <div className="image">
                    {
                        image ? <img src={image} alt="image"/>:""

                    }

                    

                </div>}
               
               
            </div>
            <hr className='posthr' />
            <div className="postbuttons">
                <button><FontAwesomeIcon icon={faThumbsUp} style={style2} />Like</button>
                <button> <FontAwesomeIcon icon={faCommentDots} style={style2} /> Comment</button>
                <button> <FontAwesomeIcon icon={faShare} style={style2} /> share</button>
            </div>
        </div>
    )
}

export default Post