import "../css/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getEmail, postLogin } from "../service/Service";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

export function Login() {
    const navigate = useNavigate();
    const [failedAccount, setFailedAccount] = useState(null);
    const username = sessionStorage.getItem('USERNAME');

    useEffect(() => {
        if (username) {
            navigate("/")
        }
    }, []);

    return (
        <div id="loginPage">
            <div className="">
            </div>
            <div className="">
                <h1 className="text-center mb-5">LOGIN</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: ""
                    }}

                    validationSchema={Yup.object().shape({
                        username: Yup.string().required("Please fill this field"),

                        password: Yup.string()
                            .required("Please fill this field")
                    })}

                    onSubmit={(values) => {
                        postLogin(values)
                            .then((e) => {
                                console.log(e);
                                sessionStorage.setItem('TOKEN', e.accessToken);
                                sessionStorage.setItem('USERNAME', e.username);
                                sessionStorage.setItem('USERID', e.userId);
                                sessionStorage.setItem('roles', e.roles[0])
                                window.location.href = '/';
                            })
                            .catch(() => {
                                setFailedAccount("Username or password is not correct")
                            }
                            );
                    }}
                >
                    <Form style={{ width: "35%", marginLeft: 494 }}>
                        <div className="mb-3 input-group">
                            <Field type="text" className="form-control" placeholder="Username"
                                name="username" />
                            <ErrorMessage name="username" className="text-danger col-12" component="span" />
                        </div>
                        <div className="mb-3 my-5 input-group">
                            <Field type="password" className="form-control "
                                placeholder="Password" name="password" />
                            <ErrorMessage name="password" className="text-danger col-12" component="span" />
                            {failedAccount && (
                                <span className="text-danger col-12">{failedAccount}</span>
                            )}
                        </div>

                        <button style={{ marginTop: -10 }} type="submit" className="col-12 button">SIGN IN</button>

                        <div className="mb-3 " style={{ textAlign: "center", color: "#3c3c3c" }}>
                            <a href="">Forgot password?</a>
                        </div>
                    </Form>
                </Formik>

            </div>

            <footer className="ftco-footer ftco-section">
                <div className="container">
                  
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">HypeSneaker</h2>

                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia.
                                </p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="">
                                        <a href="https://twitter.com/?lang=en">
                                            <span className="icon-twitter" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="https://www.facebook.com/">
                                            <span className="icon-facebook" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="https://www.instagram.com/">
                                            <span className="icon-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Menu</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Journal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Help</h2>
                                <div className="d-flex">
                                    <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Shipping Information
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Returns &amp; Exchange
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                FAQs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon icon-map-marker" />
                                            <span className="text">
                                                203 Fake St. Mountain View, San Francisco, California, USA
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon icon-phone" />
                                                <span className="text">+2 392 3929 210</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon icon-envelope" />
                                                <span className="text">info@yourdomain.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with{" "}
                                <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
                                <a href="https://colorlib.com" target="_blank">
                                    Colorlib
                                </a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}
