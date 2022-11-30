import React from 'react'
import './login.css'
import login_image from '../../../images/zorin_login.png'
function Login() {
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
                            <span>W</span>elcome Back!!
                        </h3>
                        <hr />
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Username</label>
                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Password</label>
                        </div>
                        {/* <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Name</label>
                        </div> */}

                        <button className="btn-login">
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

