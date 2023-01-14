import React, { useRef, useState ,useContext , useEffect } from 'react'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import togglepagecontext from '../../../../context/pagestoggle/togglepagecontext';

function UpdateProfile() {
    const context_page = useContext(togglepagecontext);
    const {changepage} = context_page
    const [myinfo, setmyInfo] = useState();
    const [imageSrc, setImageSrc] = useState('https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png');
    
    const [newdata , setnewdata] = useState(new FormData());
    const [usernamechecked, setusernamechecked] = useState();
    const fileInput = useRef(null);
    
    // Add new data to state


    // Get User information
    useEffect(() => {
        
        const fetch_data = async () => {
            const mydata_raw = await fetch(`http://localhost:5000/api/auth/getdata/${JSON.parse(localStorage.getItem('sclmdia_73sub67_details'))._id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )

            const mydata = await mydata_raw.json();
           
            setmyInfo(mydata.user)
            setImageSrc(mydata.user.profilepic)
        }
        fetch_data();


    }, [])
    
    

   

    

    // function to call the updateprofile api
    const updateprofile = async () => {
        console.log(newdata)
        // if (profiledata.username1 !== updateprofile.username) {
        //     if (usernamechecked === true) {
        //         if (data.profilepic) {
                    // const data = new FormData();
                    // data.append("file", imageSrc);
                    // data.append("upload_preset", "utk7tsdj");
                    // data.append("cloud_name", "dbnqqpobe");
                    // await fetch("https://api.cloudinary.com/v1_1/dbnqqpobe/image/upload", {
                    //     method: "POST",
                    //     body: data,
                    // }).then((res) => res.json())
                    //     .then((data) => {
                    //         console.log(data.url)
                    //         // data_to_upload.push({"image":data.url})
                    //         data.profilepic = data.url
                    //         // setImageSrc(data.url);
                    //     }).catch((err) => {
                    //         console.log(err)
                    //     })
                // }
            // }
            // let data = await fetch('http://localhost:5000/api/auth/updateprofile', {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "authtoken": localStorage.getItem('sclmdia_73sub67_token')
            //     },
            //     body: JSON.stringify(data_to_upload)

            // })
        // }
        // else {
        //     alert("Please Check the Availabilty before updating")
        // }
    }
   
    

    // function to checkusername api
    const checkusername = async () => {
        // const userdata = username;
        let data = await fetch('http://localhost:5000/api/user/checkusername/:userid', {
            method: "GET",
        })

        data = await data.json();
        if (data.flag === false) {
            setusernamechecked(false)
        }
        else {
            setusernamechecked(true)
        }
    }
    const handleClick = () => {
        fileInput.current.click();
    };

    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImageSrc(e.target.result)
            newdata.append("profilepic", e.target.result);
            setnewdata(newdata);

        };
        reader.readAsDataURL(file);
    };
    const onChange2 = ()=>{
        console.log(Object.fromEntries(newdata.entries()))
    }
    const onChange = (e)=>{
        setmyInfo({...myinfo , [e.target.name]:e.target.value})
        newdata.append(e.target.name, e.target.value);
        setnewdata(newdata);
    }
    return (
        <div>
            <div className="container">
                <div className="mainscreen">
                    <div className="navbar110">
                        {/* <button>back</button> */}
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <button className='updatebutton' onClick={onChange2}>Update</button>
                    </div>
                    <div className="profileform">
                        <div className="imagesection">
                            <img src={imageSrc} onClick={handleClick} alt="" className="dp987" />
                            <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleChange} />
                            <label>Click on the image to change</label>

                        </div>
                        <div className="form2">
                            <div className="groupinp">
                                <div className="innergroupinp">
                                    <label htmlFor="">Full Name</label>
                                    <input type="text"  id="" name="name"  value={myinfo?.name} onChange={onChange}  />

                                </div>
                            </div>
                            <div className="groupinp">
                                <div className="innergroupinp">
                                    <label htmlFor="">Username</label>
                                    <div className="usernameinpandbutton">
                                        <input type="text" name="username" id="" value={myinfo?.username} onChange={onChange}/>
                                        <button>Verify</button>
                                    </div>
                                    <label htmlFor="">Please Check the availabilty</label>


                                </div>
                            </div>
                            <div className="groupinp">
                                <div className="innergroupinp">
                                    <label htmlFor="">Bio</label>
                                    {/* <input type="text" name="" id="" /> */}
                                    <textarea name="bio" id="" rows="5" value={myinfo?.bio} onChange={onChange}></textarea>

                                </div>
                            </div>
                            <div className="groupinp">
                                <div className="innergroupinp">
                                    <label htmlFor="">email id</label>
                                    <input type="text" name="email" id="" value={myinfo?.email} onChange={onChange}/>

                                </div>
                                <div className="innergroupinp">
                                    <label htmlFor="">mobile</label>
                                    <input type="text" name="" id="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateProfile