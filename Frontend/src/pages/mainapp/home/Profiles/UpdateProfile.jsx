import React from 'react'
import './profile.css'
function UpdateProfile() {
    return (
        <div>
            <div className="container">
                <div className="mainscreen">
                    <div className="navbar110">
                        <button>back</button>
                        <button className='updatebutton'>Update</button>
                    </div>
                    <div className="profileform">
                        <div className="imagesection">
                            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="" className="dp987" />

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
                                    <textarea name="" id=""  rows="5"></textarea>

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