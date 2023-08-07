import * as productService from "../service/productService"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "..//css/detail.css"

export function Detail() {
    const [product1, setProduct1] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(8);
    const [itemsPerLoad, setItemsPerLoad] = useState(4);
    const [product, setProduct] = useState({});
    const param = useParams();
  

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    useEffect(() => {
        const showList = async () => {
            const rs = await productService.findAllProduct();
            setProduct1(rs)
        }
        showList()
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await productService.findProductById(param.id)
            setProduct(result1)
        }
        fetchApi()
    }, [param.id])

    return (
        <>

            <div
                className="hero-wrap hero-bread"
                style={{
                    backgroundImage: 'url("https://hsvheartmds.com/wp-content/uploads/2016/12/stock-photo-medical-blurred-background-395854618.jpg")',
                }}
            >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h1
                                style={{
                                    position: 'absolute', // Đặt vị trí của phần tử chữ SHOP là absolute
                                    top: '50%', // Đặt phần tử chữ SHOP ở giữa theo chiều dọc
                                    left: '50%', // Đặt phần tử chữ SHOP ở giữa theo chiều ngang
                                    transform: 'translate(-50%, -50%)', // Để căn giữa chữ SHOP
                                    fontSize: '4rem', // Đặt kích thước chữ SHOP
                                    fontWeight: 'bold', // Đặt độ đậm cho chữ SHOP
                                    fontFamily: "fantasy"
                                }}
                            >
                                D E T A i l
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {<section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mt-5">
                            <a >
                                <img style={{ width: "100%" }}
                                    src={product.image}
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ">
                            <h3>{product.nameProduct}</h3>
                            <div className="rating d-flex">
                                <p className="text-left mr-4">
                                    <a href="#" className="mr-2">
                                        5.0
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
                                    <a href="#">
                                        <span className="ion-ios-star-outline" />
                                    </a>
                                </p>
                                <p className="text-left mr-4">
                                    <a href="#" className="mr-2" style={{ color: "#000" }}>
                                        100 <span style={{ color: "#bbb" }}>Rating</span>
                                    </a>
                                </p>
                                <p className="text-left">
                                    <a href="#" className="mr-2" style={{ color: "#000" }}>
                                        500 <span style={{ color: "#bbb" }}>Sold</span>
                                    </a>
                                </p>
                            </div>
                            <h4>
                                <b>{product.productName}</b>
                            </h4>
                            <p className="price">
                                <span>đ {new Intl.NumberFormat().format(product.price)}</span>
                            </p>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia. It is a paradisematic country, in which
                                roasted parts of sentences fly into your mouth.
                            </p>
                            <p>
                                On her way she met a copy. The copy warned the Little Blind Text,
                                that where it came from it would have been rewritten a thousand
                                times and everything that was left from its origin would be the word
                                "and" and the Little Blind Text should turn around and return to its
                                own, safe country. But nothing the copy said could convince her and
                                so it didn’t take long until a few insidious Copy Writers ambushed
                                her, made her drunk with Longe and Parole and dragged her into their
                                agency, where they abused her for their.
                            </p>



                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-group d-flex">
                                        <div className="select-wrap">
                                            <div className="icon">
                                                <span className="ion-ios-arrow-down" />
                                            </div>
                                            <select name="" id="" className="form-control">
                                                <option value="">Small</option>
                                                <option value="">Medium</option>
                                                <option value="">Large</option>
                                                <option value="">Extra Large</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100" />
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button
                                            type="button"
                                            className="quantity-left-minus btn"
                                            data-type="minus"
                                            data-field=""
                                        >
                                            <i className="ion-ios-remove" />
                                        </button>
                                    </span>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        className="quantity form-control input-number"
                                        defaultValue={1}
                                        min={1}
                                        max={100}
                                    />
                                    <span className="input-group-btn ml-2">
                                        <button
                                            type="button"
                                            className="quantity-right-plus btn"
                                            data-type="plus"
                                            data-field=""
                                        >
                                            <i className="ion-ios-add" />
                                        </button>
                                    </span>
                                </div>
                                <div className="w-100" />
                                <div className="col-md-12">
                                    <p style={{ color: "#000" }}>80 piece available</p>
                                </div>
                            </div>
                            <p>
                                <a href="cart.html" className="btn btn-black py-3 px-5 mr-2">
                                    Add to Cart
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 nav-link-wrap">
                            <div
                                className="nav nav-pills d-flex text-center"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    className="nav-link  active mr-lg-1"
                                    id="v-pills-1-tab"
                                    data-toggle="pill"
                                    href="#v-pills-1"
                                    role="tab"
                                    aria-controls="v-pills-1"
                                    aria-selected="true"
                                >
                                    Description
                                </a>
                                <a
                                    className="nav-link mr-lg-1"
                                    id="v-pills-2-tab"
                                    data-toggle="pill"
                                    href="#v-pills-2"
                                    role="tab"
                                    aria-controls="v-pills-2"
                                    aria-selected="false"
                                >
                                    Manufacturer
                                </a>
                                <a
                                    className="nav-link "
                                    id="v-pills-3-tab"
                                    data-toggle="pill"
                                    href="#v-pills-3"
                                    role="tab"
                                    aria-controls="v-pills-3"
                                    aria-selected="false"
                                >
                                    Reviews
                                </a>
                            </div>
                        </div>
                        <div className="col-md-12 tab-wrap">
                            <div className="tab-content bg-light" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="v-pills-1"
                                    role="tabpanel"
                                    aria-labelledby="day-1-tab"
                                >
                                    <div className="p-4">
                                        <h3 className="mb-4">{product.productName}</h3>
                                        <p>
                                            On her way she met a copy. The copy warned the Little Blind
                                            Text, that where it came from it would have been rewritten a
                                            thousand times and everything that was left from its origin
                                            would be the word "and" and the Little Blind Text should turn
                                            around and return to its own, safe country. But nothing the
                                            copy said could convince her and so it didn’t take long until
                                            a few insidious Copy Writers ambushed her, made her drunk with
                                            Longe and Parole and dragged her into their agency, where they
                                            abused her for their.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-2"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-day-2-tab"
                                >
                                    <div className="p-4">
                                        <h3 className="mb-4">{product.nameProduct}</h3>
                                        <p>
                                            On her way she met a copy. The copy warned the Little Blind
                                            Text, that where it came from it would have been rewritten a
                                            thousand times and everything that was left from its origin
                                            would be the word "and" and the Little Blind Text should turn
                                            around and return to its own, safe country. But nothing the
                                            copy said could convince her and so it didn’t take long until
                                            a few insidious Copy Writers ambushed her, made her drunk with
                                            Longe and Parole and dragged her into their agency, where they
                                            abused her for their.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-3"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-day-3-tab"
                                >
                                    <div className="row p-4">
                                        <div className="col-md-7">
                                            <h3 className="mb-4">23 Reviews</h3>
                                            <div className="review">
                                                <div
                                                    className="user-img"
                                                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                                />
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                        </span>
                                                        <span className="text-right">
                                                            <a href="#" className="reply">
                                                                <i className="icon-reply" />
                                                            </a>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        When she reached the first hills of the Italic
                                                        Mountains, she had a last view back on the skyline of
                                                        her hometown Bookmarksgrov
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div
                                                    className="user-img"
                                                    style={{ backgroundImage: "url(images/person_2.jpg)" }}
                                                />
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                        </span>
                                                        <span className="text-right">
                                                            <a href="#" className="reply">
                                                                <i className="icon-reply" />
                                                            </a>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        When she reached the first hills of the Italic
                                                        Mountains, she had a last view back on the skyline of
                                                        her hometown Bookmarksgrov
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div
                                                    className="user-img"
                                                    style={{ backgroundImage: "url(images/person_3.jpg)" }}
                                                />
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                            <i className="ion-ios-star-outline" />
                                                        </span>
                                                        <span className="text-right">
                                                            <a href="#" className="reply">
                                                                <i className="icon-reply" />
                                                            </a>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        When she reached the first hills of the Italic
                                                        Mountains, she had a last view back on the skyline of
                                                        her hometown Bookmarksgrov
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="rating-wrap">
                                                <h3 className="mb-4">Give a Review</h3>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        (98%)
                                                    </span>
                                                    <span>20 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        (85%)
                                                    </span>
                                                    <span>10 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        (98%)
                                                    </span>
                                                    <span>5 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        (98%)
                                                    </span>
                                                    <span>0 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        <i className="ion-ios-star-outline" />
                                                        (98%)
                                                    </span>
                                                    <span>0 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="short-underline-text" style={{textAlign:"center"}}>Other Products</h1>
              
                <div className="container" >
                    <div className="row">
                        {product1?.slice(0, itemsToShow)?.map((value, index) => (

                            <div className="col-sm-12 col-md-6 col-lg-3 d-flex" key={index}>
                                <div className="product d-flex flex-column">
                                    <NavLink to={`/detail/${value.productId}`}>
                                        <a className="img-prod">
                                            <img src={value.image} className="slide_img" />
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
                    {itemsToShow < product1.length && (
                <div className="text-center mt-3" >
                  <button style={{ width: "100px", marginTop: -44}} className="btn btn-primary" onClick={handleLoadMore}>
                    Load More
                  </button>
                </div>
              )}
                </div>
            </section>}
            <footer className="ftco-footer ftco-section" >
                <div className="container">
                    <div className="row">
                        <div className="mouse" style={{paddingTop:20}}>
                            <a href="#" className="mouse-icon" >
                                <div className="mouse-wheel">
                                    <span className="ion-ios-arrow-up" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2>Hype Sneaker</h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia.
                                </p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="e">
                                        <a href="#">
                                            <span className="icon-twitter" />
                                        </a>
                                    </li>
                                    <li className="e">
                                        <a href="#">
                                            <span className="icon-facebook" />
                                        </a>
                                    </li>
                                    <li className="e">
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