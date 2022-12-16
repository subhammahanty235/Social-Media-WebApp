import React, { useState, useEffect } from 'react'
import { GrLike } from 'react-icons/gr'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment'
function Post(props) {
    
    let myid;
    const [numlikes, setnumLikes] = useState(0)
    const [uploadedBy, setUpoadedBy] = useState({})
    const [commenttext , setCommentText] = useState({comment:""})
    const { post } = props;
    const likepost = async () => {
        console.log(post.comments)
    }

    const commentonPost = async()=>{
       let resp=  await fetch(`http://localhost:5000/api/post/comment/${post._id}`,{
            method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken':localStorage.getItem('sclmdia_73sub67_token')
                }
                ,
                body: JSON.stringify(commenttext)
            

        })

        resp = await resp.json();
        if(resp.flag === true){
            console.log("Comment Added")
        }
        else{
            console.log("Error error occured")
        }
        
    }


    useEffect(() => {
        myid = localStorage.getItem('sclmdia_73sub67_details')._id
        setnumLikes(post.likes.length);
        // console.log(post)

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
    }, [])
    const style = { color: "orangered", fontSize: "1.5em", "margin": "0px 3px" }
    const style2 = { color: "grey", fontSize: "1.5em", "margin": "0px 3px" }
    const btn = () => [
        console.log(numlikes)
    ]
    return (
        <div>


            <div className='post'>
                <div className="postbyinfo">
                    <img src={uploadedBy?.profilepic !== null ? uploadedBy?.profilepic : "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"} alt="image" />
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
                                post?.content ? <p>{post.content}</p> : ""
                            }

                        </div>

                    }

                    {
                        <div className="conimage">
                            {
                                post?.media ? <img src={post.media} alt="image" /> : ""

                            }



                        </div>}


                </div>
                {/* <hr className='posthr' /> */}
                <div className="landcmts">
                    <p> {numlikes?.length} Likes</p>
                    <p>{post.comments?.length}  Comments</p>
                    <p> </p>

                </div>
                <hr className='posthr'/>
                <div className="postbuttons">
                    <button><FontAwesomeIcon icon={faThumbsUp} onClick={() => likepost()} style={post.likes.includes("636d2c0033921da9ee18971b") ? style : style2} />Like</button>
                    <button data-bs-toggle="modal" data-bs-target="#commentsmodal"> <FontAwesomeIcon icon={faCommentDots} style={style2} />Comment</button>
                    <button> <FontAwesomeIcon icon={faShare} style={style2} /> share</button>

                </div>
                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#commentsmodal">
                Launch
            </button> */}

                {/* <!-- Modal --> */}

            </div>
            <div class="modal fade" id="commentsmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fs-5 text-center" id="exampleModalLabel">Comments</h5>
                            {/* <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div class="modal-body cmtmdl">
                            {/* <Comment cmt={post.comments[0]}/>
                            <Comment cmt={2}/> */}
                            {
                                post.comments?.map((c)=>{
                                    console.log(c);
                                    return <Comment/>
                                })
                            }

                            {/* <Comment/> */}
                            {
                            //    arra.map(()=>{
                            //     return <Comment/>
                            //    })


                            }
                        </div>
                        <div class="modal-footer">

                            <div className="inputandbutton">
                                <input type="text" name="comment" id="" placeholder='Write Your Comment' value={commenttext.comment} onChange={(e)=>{setCommentText({comment:e.target.value})}} />
                                <button onClick={commentonPost}>Send</button>
                            </div>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post