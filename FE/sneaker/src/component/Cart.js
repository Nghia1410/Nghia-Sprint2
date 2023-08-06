import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { render } from 'creditcardpayments/creditCardPayments';
// Import other dependencies, services, and models as needed
import * as UserService from "..//service/userService"
import * as CartService from "..//service/cartService"
import * as ProductService from "..//service/productService"
import { useParams } from 'react-router';

export const Cart = () => {
    const [userId, setUserId] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartDetailDto, setCartDetailDto] = useState([]);
    const username = sessionStorage.getItem('USERNAME');

    const [sum, setSum] = useState(0);
    const [total, setTotal] = useState(0);
    const param = useParams();
    const ship = 30; // Assuming it's a constant
    const [user, setUser] = useState(null); // Replace 'User' with the appropriate user model



    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);

    const calculateTotalSum = () => {
        let totalSum = 0;
        for (const item of cart) {
            totalSum += item.price * item.amount;
        }
        return totalSum;
    };

    useEffect(() => {
        const listCard = async () => {
            const rs = await CartService.getAllCart(param.username);

            setCart(rs)

        }
        listCard();
    }, []);
    console.log(cart);



    const deleteCartDetail = (cartId, productId, productName, cartDetailId) => {
        // Call the API to delete the cart detail
        CartService.deleteCartDetail(cartId, productId).then(() => {
            // Update the cart state to remove the deleted item
            setCart((prevCart) => prevCart.filter((item) => item.cartDetailId !== cartDetailId));
    
            Swal.fire({
                title: 'Thông báo!',
                text: `Bạn vừa xoá mặt hàng ${productName}`,
                icon: 'success',
                confirmButtonText: 'OK',
            });
        });
    };



    return (
        <div>
            <div
                className="hero-wrap hero-bread"
                style={{ backgroundImage: 'url("https://hsvheartmds.com/wp-content/uploads/2016/12/stock-photo-medical-blurred-background-395854618.jpg")' }}
            >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="/">Home</a>
                                </span>{" "}
                                <span>Cart</span>
                            </p>
                            <h1 className="mb-0 bread">My Wishlist</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">

                            {cart.length === 0 ? (
                                <div className="text-center m-5">

                                    <img
                                        src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                                        alt="Empty Cart"
                                        height="210"
                                        width="300"
                                    />
                                    <h1 style={{ textAlign: "center" }}>EMPTY CART</h1>
                                </div>
                            ) : (

                                <div className="cart-list">
                                    <table className="table">
                                        <thead className="thead-primary">
                                            <tr className="text-center">
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart?.map((item, index) => (
                                                <tr className="text-center" key={index}>
                                                    <td className="product-remove">
                                                        <a href="#" onClick={() => deleteCartDetail(item.cartId, item.productId, item.productName, item.cartDetailId)}> 
                                                          <span className="ion-ios-close" />
                                                        </a>
                                                    </td>
                                                    <td className="image-prod">

                                                        <div >
                                                            <img style={{ width: 140 }} src={item.image}></img>
                                                        </div>

                                                    </td>
                                                    <td className="product-name">
                                                        <h3>{item.productName}</h3>

                                                    </td>


                                                    <td className="price">
                                                        <span style={{ fontFamily: "Cabin" }}>đ {new Intl.NumberFormat().format(item.price)}</span>
                                                    </td>
                                                    <td className="quantity">
                                                        <div className="input-group mb-3">
                                                            <input
                                                                type="text"
                                                                name="quantity"
                                                                className="quantity form-control input-number"
                                                                defaultValue={item.amount}


                                                            />

                                                        </div>
                                                    </td>
                                                    <td className="total">{Intl.NumberFormat().format(item.price * item.amount)} VND</td>                                                </tr>

                                            ))}

                                            {/* END TR*/}

                                            {/* END TR*/}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span className="text-end">{Intl.NumberFormat().format(calculateTotalSum())} VND</span>
                                </p>

                                <p className="d-flex">
                                    <span>Ship</span>
                                    <span className="text-end">30.000 VND</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span className="text-end">{Intl.NumberFormat().format(calculateTotalSum() + 30000)} VND</span>
                                </p>
                            </div>
                            <PayPalScriptProvider>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: calculateTotalSum(),
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then(function () {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Payment success',
                                                showConfirmButton: false,
                                                timer: 1000,
                                            });

                                            // Clear the cart after successful payment
                                            CartService.setCart(userId).then((updatedCartData) => {
                                                setCart(updatedCartData);
                                            });

                                            // You might also want to clear the cart in the database via an API call
                                            // Example: CartService.clearCart(userId);
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>





                        </div>
                    </div>
                </div>
            </section >
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
            {/* <div id="myPaypalButtons"></div> */}
        </div>
    );
};
