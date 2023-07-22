import axios from "axios";
import * as productService from "../service/productService"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";


export function Home() {
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(8); // Số sản phẩm hiển thị ban đầu
    useEffect(() => {
        const showList = async () => {
            const rs = await productService.findAllProduct();
            setProduct(rs)
        }
        showList()
    }, []);


    console.log(product);
    return (
        <>

            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                    id="ftco-navbar"
                >
                    <div className="container">
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
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a href="/" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link "
                                        href="/shop"
                                    >
                                        Shop
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">
                                        About
                                    </a>
                                </li>

                                <li className="nav-item cta cta-colored">
                                    <a href="cart.html" className="nav-link">
                                        <span className="icon-shopping_cart" />
                                        [0]
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>

                </nav>

                {/* END nav */}
            </div>
            <div style={{ marginTop: "100px" }}
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://glab.vn/storage/uploads/advert/6448f45698c3e.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://glab.vn/storage/uploads/advert/64982667e4f4d.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://glab.vn/storage/uploads/advert/6464cc1cd8e4d.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ marginTop: "11%" }} />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ marginTop: "11%" }} />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <h2 className="mb-4">NEW COLLECTION </h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {product?.slice(0, itemsToShow)?.map((value, index) => (

                            <div className="col-sm-12 col-md-6 col-lg-3 d-flex" key={index}>
                                <div className="product d-flex flex-column">
                                    <NavLink to={`/detail/${value.idProduct}`}>
                                        <a className="img-prod">
                                            <img src={value.image} className="slide_img" />
                                            <img style={{ width: "70px", marginLeft: "200px", marginTop: "20px" }} src="https://o.remove.bg/downloads/ea9e98f9-2441-42c7-9635-6172d4f4d58e/new-removebg-preview__1_-removebg-preview.png" className="news_label" />
                                            <div className="overlay" />
                                        </a>
                                    </NavLink>

                                    <div className="text py-3 pb-4 px-3">
                                        <div className="d-flex">
                                            <div className="cat">

                                            </div>
                                            <div className="rating">
                                                <p className="text-right mb-0">
                                                    <a href="#">
                                                        <span className="ion-ios-star-outline" />
                                                    </a>
                                                    <a href="#">
                                                        <span className="ion-ios-star-outline" />
                                                    </a>
                                                    <a href="#">
                                                        <span className="ion-ios-star-outline" />
                                                    </a>
                                                    <a href="#">
                                                        <span className="ion-ios-star-outline" />
                                                    </a>
                                                    <a href="#">
                                                        <span className="ion-ios-star-outline" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <h3>
                                            <span>{value.nameProduct}</span>
                                        </h3>
                                        <div className="pricing">
                                            <p className="price">
                                                <span style={{ fontFamily: "Cabin" }}>đ {new Intl.NumberFormat().format(value.price)}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                    </div>

                </div>


            </section>

            <section className="ftco-section ftco-deal bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ width: "250%" }} src="https://o.remove.bg/downloads/3cdc642b-02d2-4ddf-a43d-8ff04c38abd3/one-removebg-preview.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="heading-section heading-section-white">
                                <span className="subheading">Deal of the month</span>
                                <h2 className="mb-3">Deal of the month</h2>
                            </div>
                            <div id="timer" className="d-flex mb-4">
                                <div className="time" id="days" />
                                <div className="time pl-4" id="hours" />
                                <div className="time pl-4" id="minutes" />
                                <div className="time pl-4" id="seconds" />
                            </div>
                            <div className="text-deal">
                                <h2>
                                    <a href="#">Nike Free RN 2019 </a>
                                </h2>
                                <p className="price">
                                    <span className="mr-2 price-dc">$120.00</span>
                                    <span className="price-sale">$80.00</span>
                                </p>
                                <ul className="thumb-deal d-flex mt-4">
                                    <li
                                        className="img"
                                        style={{ backgroundImage: "url(https://o.remove.bg/downloads/4b7f4336-8f19-45ca-8490-ad6779b93c87/jd1-removebg-preview.png)" }}
                                    />
                                    <li
                                        className="img"
                                        style={{ backgroundImage: "url(https://o.remove.bg/downloads/4f87cb20-da72-4978-954f-cfaaf4af8a10/jd2-removebg-preview.png)" }}
                                    />
                                    <li
                                        className="img"
                                        style={{ backgroundImage: "url(https://o.remove.bg/downloads/520d1286-34cb-409a-802c-3ff79700f334/jd3-removebg-preview.png)" }}
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-4 ">
                            <h2 className="mb-4">Follow Us On Instagram</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they
                                live in
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-2 ">
                            <a
                                href="https://themewagon.github.io/minishop/images/gallery-1.jpg"
                                className="gallery image-popup img d-flex align-items-center"
                                style={{ backgroundImage: "url(https://themewagon.github.io/minishop/images/gallery-1.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <a
                                href="https://themewagon.github.io/minishop/images/gallery-2.jpg"
                                className="gallery image-popup img d-flex align-items-center"
                                style={{ backgroundImage: "url(https://themewagon.github.io/minishop/images/gallery-2.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <a
                                href="https://themewagon.github.io/minishop/images/gallery-3.jpg"
                                className="gallery image-popup img d-flex align-items-center"
                                style={{ backgroundImage: "url(https://themewagon.github.io/minishop/images/gallery-3.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <a
                                href="https://themewagon.github.io/minishop/images/gallery-4.jpg"
                                className="gallery image-popup img d-flex align-items-center"
                                style={{ backgroundImage: "url(https://themewagon.github.io/minishop/images/gallery-4.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <a
                                href="https://themewagon.github.io/minishop/images/gallery-5.jpg"
                                className="gallery image-popup img d-flex align-items-center"
                                style={{ backgroundImage: "url(https://themewagon.github.io/minishop/images/gallery-5.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ">
                            <a
                                href="https://themewagon.github.io/minishop/images/gallery-6.jpg"
                                className="gallery image-popup img d-flex align-items-center"
                                style={{ backgroundImage: "url(https://themewagon.github.io/minishop/images/gallery-6.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="mouse">
                            <a href="#" className="mouse-icon">
                                <div className="mouse-wheel">
                                    <span className="ion-ios-arrow-up" />
                                </div>
                            </a>
                        </div>
                    </div>
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
                                        <a href="#">
                                            <span className="icon-twitter" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="#">
                                            <span className="icon-facebook" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="#">
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

        </>

    )
}