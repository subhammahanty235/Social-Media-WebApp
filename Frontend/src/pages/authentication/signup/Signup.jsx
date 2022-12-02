import React from 'react'
import './signup.css'
import login_image from '../../../images/zorin_login.png'
function Signup() {
    return (
        <div>
            <div className="main">

                <div className="innermain">

                    <div className="image">
                        <img src={login_image} alt="login" />
                        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="image" /> */}
                    </div>
                    <div className="form">
                        <h3 className="login__header">
                            <span>Joining</span> A new World
                        </h3>
                        <hr />
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Full Name</label>
                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">email id</label>
                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">username</label>
                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">password</label>
                        </div>
                        {/* <p className="text-center">
                            Aleady A user , Click on the Already User Button to login 
                        </p> */}
                        <div className="buttonbox">
                            <button className="btn-login1">
                                Sign Up
                            </button>
                            <button className="btn-login2">
                               Already an User!
                            </button>

                        </div>
                    </div>

                    {/* <button className="btn-su">Login</button> */}
                </div>
            </div>
        </div>
    )
}

export default Signup

