import React, { useRef ,useState } from 'react'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function UpdateProfile() {
    const fileInput = useRef(null);
    
    const [imageSrc, setImageSrc] = useState('https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png');

    // function to call the api
    const updateprofile = ()=>{

    }
    const handleClick = () => {
        fileInput.current.click();
    };

    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImageSrc(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    return (
        <div>
            <div className="container">
                <div className="mainscreen">
                    <div className="navbar110">
                        {/* <button>back</button> */}
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <button className='updatebutton'>Update</button>
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
                                    <input type="text" name="" id="" />

                                </div>
                            </div>
                            <div className="groupinp">


                                <div className="innergroupinp">
                                    <label htmlFor="">Username</label>
                                    <div className="usernameinpandbutton">
                                        <input type="text" name="" id="" />
                                        <button>Verify</button>
                                    </div>
                                    <label htmlFor="">Please Check the availabilty</label>


                                </div>
                            </div>
                            <div className="groupinp">
                                <div className="innergroupinp">
                                    <label htmlFor="">Bio</label>
                                    {/* <input type="text" name="" id="" /> */}
                                    <textarea name="" id="" rows="5"></textarea>

                                </div>
                            </div>
                            <div className="groupinp">
                                <div className="innergroupinp">
                                    <label htmlFor="">email id</label>
                                    <input type="text" name="" id="" />

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