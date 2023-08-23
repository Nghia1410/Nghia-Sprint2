import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { useContext } from "react";
import { QuantityContext } from "./QuantityContext";
import * as CartService from "..//service/cartService"
import * as UserService from "..//service/userService"



export const Header = () => {
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [cart, setCart] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { iconQuantity, setIconQuantity } = useContext(QuantityContext)
    const navigate = useNavigate();

    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);


    useEffect(() => {
        const showListCart = async () => {
            const rs = await CartService.getAllCart();
            setCart(rs)
        }
        showListCart()
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
            setIsMenuOpen(false);
        };

        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaQueryChange = (mediaQuery) => {
            setIsMediaQueryMatched(mediaQuery.matches);
        };

        handleMediaQueryChange(mediaQuery); // Kiểm tra trạng thái ban đầu của media query

        mediaQuery.addListener(handleMediaQueryChange); // Lắng nghe sự thay đổi của media query

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMenuOpen(false); // Đóng menu khi kích thước màn hình thay đổi
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMediaQueryMatched) {
            setIsMenuOpen(false);
        }
    }, [isMediaQueryMatched]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        sessionStorage.removeItem("TOKEN");
        sessionStorage.removeItem("USERNAME");
        sessionStorage.removeItem("roles");
        window.location.href = '/login';
    };

    return (
        <header className={isMenuOpen ? "open" : ""}>

            {sessionStorage.getItem("roles") === "ADMIN" && (
                <>
                    <nav
                        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                        id="ftco-navbar" style={{ height: "10%" }}
                    >
                        <div className="container" style={{ marginTop: -13, marginRight: "22%" }}>
                            <a className="navbar-brand" href="/">
                                HypeSneaker
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#ftco-nav"
                                aria-controls="ftco-nav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="oi oi-menu" /> Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav" style={{ marginLeft: "38%", marginRight: "-29%" }}>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link "
                                            to="/shop"
                                        >
                                            Shop
                                        </Link>

                                    </li>

                                    <li className="nav-item active">
                                        <Link to="/employee" className="nav-link">
                                            Employee
                                        </Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link to="/history" className="nav-link">
                                            History
                                        </Link>
                                    </li>

                                    <NavLink to={`/v2/cart/${username}`}>
                                        <li className="nav-item cta cta-colored">

                                            <a className="nav-link" >
                                                <span className="icon-shopping_cart" />
                                                [{iconQuantity}]
                                            </a>


                                        </li>
                                    </NavLink>





                                    <li className="nav-item">
                                        <a className="nav-link" style={{ color: "red" }}>{sessionStorage.getItem("USERNAME")}</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "red" }} onClick={() => logout()}>Log out</Link>


                                    </li>


                                </ul>
                            </div>
                        </div>

                    </nav>

                </>
            )
            }

            {
                sessionStorage.getItem("roles") === "USER" && (
                    <>

                        <nav
                            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                            id="ftco-navbar" style={{ height: "10%" }}
                        >
                            <div className="container" style={{ marginTop: -13, marginRight: "22%" }}>
                                <Link className="navbar-brand" to="/">
                                    HypeSneaker
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#ftco-nav"
                                    aria-controls="ftco-nav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="oi oi-menu" /> Menu
                                </button>
                                <div className="collapse navbar-collapse" id="ftco-nav" style={{ marginLeft: "38%", marginRight: "-29%" }}>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink
                                                className="nav-link "
                                                to="/shop"
                                            >
                                                Shop
                                            </NavLink>

                                        </li>

                                        <li className="nav-item active">
                                            <a href="/history" className="nav-link">
                                                History
                                            </a>
                                        </li>

                                        <NavLink to={`/v2/cart/${username}`}>
                                            <li className="nav-item cta cta-colored">

                                                <a className="nav-link">
                                                    <span className="icon-shopping_cart" />
                                                    [{iconQuantity}]
                                                </a>


                                            </li>
                                        </NavLink>

                                        <li className="nav-item">
                                            <a className="nav-link" style={{ color: "red" }}>{sessionStorage.getItem("USERNAME")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" style={{ color: "red" }} onClick={() => logout()}>Log out</Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                        </nav>

                    </>
                )
            }
            {
                !sessionStorage.getItem("TOKEN") && (
                    <>
                        <nav
                            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                            id="ftco-navbar" style={{ height: "10%" }}
                        >
                            <div className="container" style={{ marginTop: -13, marginRight: "22%" }}>
                                <a className="navbar-brand" href="/">
                                    HypeSneaker
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#ftco-nav"
                                    aria-controls="ftco-nav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="oi oi-menu" /> Menu
                                </button>
                                <div className="collapse navbar-collapse" id="ftco-nav" style={{ marginLeft: "38%", marginRight: "-29%" }}>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link
                                                className="nav-link "
                                                to="/shop"
                                            >
                                                Shop
                                            </Link>

                                        </li>


                                        <li style={{ width: 84 }} className="nav-item">
                                            <a style={{ marginTop: "-4%" }} href="/login" className="nav-link">
                                                <img style={{ width: 25 }} src="/image/avata.png"></img>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </> 
                )
            }

            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

        </header >
    );
};



