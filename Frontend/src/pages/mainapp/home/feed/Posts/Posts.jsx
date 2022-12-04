import React from 'react'
import Post from './Post'
import './posts.css'
function Posts() {
  return (
        <div className="postbox">
            <Post/>
            <Post textcontent="testing content"/>
            <Post image="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/314645764_1545955799189269_6229667795802265980_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RZRYbzBtyEQAX9i47Zy&_nc_ht=scontent.fixr3-2.fna&oh=00_AfB6GDC7sgqFIvEgdCZxkAdasdcb2LcNc2ez8lviiIN0CA&oe=6391A923"/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
  )
}

export default Posts