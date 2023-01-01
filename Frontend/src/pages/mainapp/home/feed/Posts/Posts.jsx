import React , {useState , useEffect} from 'react'
import Post from './Post'
import './posts.css'
function Posts(props) {
  const {setprofileid ,pmppage} = props
    const [myPosts, setmyPosts] = useState();
    // const [myinfo, setmyInfo] = useState();
    // const mydetails = JSON.parse(localStorage.getItem('sclmdia_73sub67_details'));

    useEffect(() => {
        const fetch_data = async () => {
            const mydata_raw = await fetch(`http://localhost:5000/api/post/allposts`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )

            const mydata = await mydata_raw.json();
            // console.log(mydata.posts)
            setmyPosts(mydata)
            

        }
        fetch_data();
        

    }, [])

  return (
    <div>

        <div className="postbox">
            {
              myPosts?.map((post)=>{
                // console.log(post)
                return <Post setprofileid={setprofileid} post={post} key={post._id} pmppage={pmppage}/>
              })
            }
            {/* <Post/>
            <Post textcontent="testing content"/>
            <Post textcontent="hello world" image="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/314645764_1545955799189269_6229667795802265980_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RZRYbzBtyEQAX9i47Zy&_nc_ht=scontent.fixr3-2.fna&oh=00_AfB6GDC7sgqFIvEgdCZxkAdasdcb2LcNc2ez8lviiIN0CA&oe=6391A923"/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/> */}
        </div>
        
    </div>

  )
}

export default Posts