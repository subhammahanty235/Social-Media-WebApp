import React, {useState, useEffect } from 'react'
import {GrLike} from 'react-icons/gr'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots , faShare} from '@fortawesome/free-solid-svg-icons'
function Post(props) {
    const [uploadedBy , setUpoadedBy] = useState({})
    const { post } = props;

    useEffect(()=>{
        console.log(post)
        const fetch_data = async () => {
            const userdata_raw = await fetch(`http://localhost:5000/api/auth/getdata/${post.uploadedBy}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )

            const userdata = await userdata_raw.json();
            setUpoadedBy(userdata.user)
            // console.log(mydata.posts)
            
            

        }
        fetch_data()
    },[])
    const style = { color: "green", fontSize: "1.5em", "margin":"2px"}
    const style2 = {color: "grey", fontSize: "1.5em", "margin":"0px 3px" }
    return (
        <div className='post'>
            <div className="postbyinfo">
            <img src={uploadedBy?.profilepic !== null ?uploadedBy?.profilepic:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" } alt="image" />
                <div className="nameanddate">
                    <p>{uploadedBy?.name}</p>
                    <small className="timeline">
                        {moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                    </small>

                </div>

            </div>
            <hr className='posthr' />
            <div className="content">
                {
                <div className="container">
                    {
                        post?.content?<p>{post.content}</p>:""
                    }
                    
                </div>

                }
                
                {
                <div className="conimage">
                    {
                       post?.media ? <img src={post.media} alt="image"/>:""

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