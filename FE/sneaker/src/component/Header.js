import React, { useEffect, useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleAddToCart = (product) => {
        // Check if the product already exists in the cart
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            // If the product exists, update its quantity
            const updatedCart = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            // If the product doesn't exist, add it to the cart with quantity 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const addToCart = (product) => {
        // Check if the product already exists in the cart
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // If the product already exists, update its quantity
            const updatedItems = cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedItems);
        } else {
            // If the product doesn't exist, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };


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
        sessionStorage.removeItem("ROLES");
        window.location.href = '/';
    };

    return (
        <header className={isMenuOpen ? "open" : ""}>

            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar">
                <ul className={isMenuOpen ? "open" : ""}>
                    {sessionStorage.getItem("ROLES") === "ROLE_ADMIN" && (
                        <>
                            <li>
                                <Link to="/shop">Sản phẩm</Link>
                            </li>

                            <li>
                                <Link to="/statistical">Thu nhập</Link>
                            </li>
                            <li>
                                <Link to="/employee">Quản lí nhân viên</Link>
                            </li>
                            <li>
                                <Link to="/profile">{sessionStorage.getItem("USERNAME")}</Link>
                            </li>
                            <li>
                                <Link onClick={() => logout()}>Đăng xuất</Link>
                            </li>
                        </>
                    )}

                    {sessionStorage.getItem("ROLES") === "ROLE_STAFF" && (
                        <>

                            <div className="d-flex">
                                <a className="navbar-brand mt-2" href="/" style={{ paddingRight: "150%", marginLeft: 46 }}>
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
                                <div className="collapse navbar-collapse" id="ftco-nav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a href="/" className="nav-link">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/shop" className="nav-link">
                                                Shop
                                            </a>
                                        </li>

                                        <li className="nav-item cta cta-colored">
                                            <a style={{width:83}}  href="/cart" className="nav-link">
                                                <span className="icon-shopping_cart" />
                                                [{cartItems.reduce((total, item) => total + item.quantity, 0)}]
                                            </a>
                                        </li>

                                        <li className="nav-item cta cta-colored">
                                            <a className="nav-link" href="/profile">{sessionStorage.getItem("USERNAME")}</a>
                                        </li>
                                        {/* <li className="nav-item cta cta-colored">
                                            <a className="nav-link" onClick={() => logout()}>Log out</a>
                                        </li>


                                        <li style={{ width: 84 }} className="nav-item">
                                            <a style={{ marginTop: "-4%" }} href="/api/login" className="nav-link">
                                                <img style={{ width: 25 }} src="https://o.remove.bg/downloads/e36cb263-1866-406b-b1e1-63b01451dca6/avatar-removebg-preview.png"></img>
                                            </a>
                                        </li> */}


                                        <div class="dropdown mt-2" >
                                            <button  class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img style={{ width: 25 }} src="https://o.remove.bg/downloads/f09c7b66-9fc9-49c8-9c30-932a1cf27695/avatar-removebg-preview.png"></img>
                                            </button>
                                            <ul style={{width:30}} class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                               
                                                <li style={{textAlign:"center",}}>
                                                      <a  onClick={() => logout()}>Log out</a>
                                                    </li>
                                               
                                            </ul>
                                        </div>



                                    </ul>
                                </div>
                            </div>

                        </>
                    )}
                    {!sessionStorage.getItem("TOKEN") && (
                        <>

                            <div className="d-flex">
                                <a className="navbar-brand mt-2" href="/" style={{ paddingRight: "190%", marginLeft: 46 }}>
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
                                <div className="collapse navbar-collapse" id="ftco-nav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a href="/" className="nav-link">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/shop" className="nav-link">
                                                Shop
                                            </a>
                                        </li>

                                        <li className="nav-item cta cta-colored">
                                            <a href="/cart" className="nav-link">
                                                <span className="icon-shopping_cart" />
                                                [{cartItems.reduce((total, item) => total + item.quantity, 0)}]
                                            </a>
                                        </li>

                                        <li style={{ width: 84 }} className="nav-item">
                                            <a style={{ marginTop: "-4%" }} href="/api/login" className="nav-link">
                                                <img style={{ width: 25 }} src="https://o.remove.bg/downloads/f09c7b66-9fc9-49c8-9c30-932a1cf27695/avatar-removebg-preview.png"></img>
                                            </a>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </header>
    );
};



