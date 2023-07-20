import React from 'react';
import "../css/login.css"
export function Login() {
    return (
        <>
            <section id="bgr">
                <div className="form-box">
                    <div className="form-value">
                        <form action="">
                            <h2>Login</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input type="email" required="" />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline" />
                                <input type="password" required="" />
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="forget">
                                <label htmlFor="">
                                    <input type="checkbox" />
                                    Remember Me <a href="#">Forget Password</a>
                                </label>
                            </div>
                            <button>Log in</button>
                            <div className="register">
                                <p>
                                    Don't have a account <a href="#">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}