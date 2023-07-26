import "../css/login.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {getEmail, postLogin} from "../service/Service";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import 'react-toastify/dist/ReactToastify.css';

export function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [failedAccount, setFailedAccount] = useState(null);

    const handlePassword = () => {
        const formPw = document.querySelector(".form-pw");

        if (showPassword) {
            formPw.setAttribute("type", "password");
        } else {
            formPw.setAttribute("type", "text");

        }

        setShowPassword((pre) => !pre);
    }

    if (!!sessionStorage.getItem("TOKEN")) {
        navigate('/');
        return null;
    }

    return (
        <div  id="loginPage">
            <div className="">
                <div className=" ">
                </div>
                <div className="">
                    <h1 className="text-center mb-5">Đăng nhập</h1>
                    <Formik
                        initialValues={{
                            nameAccount: "",
                            password: ""
                        }}

                        validationSchema={Yup.object().shape({
                            nameAccount: Yup.string().required("trường này không được để trống"),

                            password: Yup.string()
                                .required("trường này không được để trống")
                                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, "mật khẩu phải có ít nhất 1 chữ hoa,ít nhất 1 chữ thường, có 1 ký tự và số"),
                        })}

                        onSubmit={(values) => {
                            postLogin(values)
                                .then((e) => {
                                    sessionStorage.setItem('TOKEN', e.accessToken);
                                    sessionStorage.setItem('USERNAME', e.nameAccount);
                                    sessionStorage.setItem('ROLES', e.roles[0].authority)
                                    window.location.href = '/';
                                })
                                .catch(() => {
                                        setFailedAccount("Tên tài khoản hoặc mật khẩu không đúng")
                                    }
                                );
                        }}
                    >
                        <Form>
                            <div className="mb-3 input-group">
                                <Field type="text" className="form-control form-custom" placeholder="Tên đăng nhập"
                                       name="nameAccount"/>
                                <ErrorMessage name="nameAccount" className="text-danger col-12" component="span"/>

                            </div>
                            <div className="mb-3 my-5 input-group">
                                <Field type="password" className="form-control form-custom form-pw"
                                       placeholder="Mật khẩu" name="password"/>
                                <span className="password-icon" onClick={() => handlePassword()}>
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
                                    </span>

                                <ErrorMessage name="password" className="text-danger col-12" component="span"/>
                                {failedAccount && (
                                    <span className="text-danger col-12">{failedAccount}</span>
                                )}
                            </div>
                            <div className="mb-3 float-end">
                                <a className="text-forgot-password text-decoration-none" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">Quên mật khẩu?</a>
                            </div>
                            <button type="submit" className="col-12 button">Đăng nhập</button>
                        </Form>
                    </Formik>

                </div>
            </div>
        </div>
    )
}
