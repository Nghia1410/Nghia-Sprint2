import * as productService from "../service/productService"
import React, { useEffect, useState } from "react"
import * as Cart from "../component/Cart"
import Swal from "sweetalert2"
import { Link } from "react-router-dom";
import { QuantityContext } from "./QuantityContext";
import { useContext } from "react";
import * as CartService from "..//service/cartService"
import axios from "axios";
import { param } from "jquery";
import * as UserService from "..//service/userService"





export function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [productType, setProductType] = useState([])
  const [product, setProduct] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(9); // Số sản phẩm hiển thị ban đầu
  const [itemsPerLoad, setItemsPerLoad] = useState(3);
  const {iconQuantity,setIconQuantity } = useContext(QuantityContext)
  
  const displayListProduct = async () => {
    const res = await productService.findAllProduct();
    setProduct(res);
  };



  const [userId, setUserId] = useState(0);
  const username = sessionStorage.getItem('USERNAME');
  const [productId, setProductId] = useState(1); 
  const [amount, setAmount] = useState(1); 
   

    useEffect(() => {
      const getUserName = async () => {
          const rs = await UserService.findUserName(username);
          console.log(rs);
          setUserId(rs)
      }
      getUserName();
  }, []);


    const addToCart = (productId,item) => {
      const apiUrl = `http://localhost:8080/api/cart/addToCart/${userId}/${productId}/${amount}`;

      // const existingCartItem = cartItems.find(
      //   (cartItem) => cartItem.productId === item.productId
      // );
  
      // if (existingCartItem) {
      //   const updatedCartItems = cartItems.map((cartItem) =>
      //     cartItem.productId === item.productId
      //       ? { ...cartItem, quantityOfProduct: cartItem.quantityOfProduct + 1 }
      //       : cartItem
      //   );
        
      //   setCartItems(updatedCartItems);
      // } else {
      //   setCartItems([...cartItems, { ...item, quantityOfProduct: 1 }]);
        
      // }
      setIconQuantity(iconQuantity+1)
      Swal.fire({
        icon: 'success',
        title: 'Đã thêm vào giỏ hàng',
        showConfirmButton: false,
        timer: 1000
      });
  
 
      axios.get(apiUrl)
        .then(response => {
          Swal.fire({
            title: 'Thông báo',
            text: 'Thêm thành công sản phẩm vào giỏ hàng!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
          console.log('Item added to cart:', response.data);
        })
        .catch(error => {
          console.error('Error adding item to cart:', error.response);
        });
    };


  console.log(iconQuantity);
  const handleDisplayByType = async (type) => {
    const res = await productService.getAllProductByType(type);
    setProduct(res);
  };

  useEffect(() => {
    const showProductType = async () => {
      const rs = await productService.findProductType();
      setProductType(rs)
    }
    showProductType()
  }, []);

  useEffect(() => {
    const showList = async () => {
      const rs = await productService.findAllProduct();
      setProduct(rs)
    }
    showList()
  }, []);
  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + itemsPerLoad);
  };
  const handleAddToCartClick = (productId) => {
    addToCart(productId);
  };
  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{
          backgroundImage: 'url("https://hsvheartmds.com/wp-content/uploads/2016/12/stock-photo-medical-blurred-background-395854618.jpg")',
          position: 'relative', 
          color: 'white',
        }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1
                style={{
                  paddingLeft: "28px",
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '4rem',
                  fontWeight: 'bold', 
                  fontFamily: "fantasy"
                }}
              >
                SHOP
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
                {product?.slice(0, itemsToShow)?.map((value, index) => (
                  <div className="col-sm-12 col-md-12 col-lg-4 d-flex" key={index}>
                    <div className="product d-flex flex-column">
                      <a href="#" className="img-prod">
                        <img
                          className="img-fluid"
                          src={value.image}
                          alt="Colorlib Template"
                        />
                        <div className="overlay" />
                      </a>
                      <div className="text py-3 pb-4 px-3">
                        <div className="d-flex">
                          <div className="cat">
                            <span>Lifestyle</span>
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
                          <a href="#">{value.nameProduct}</a>
                        </h3>
                        <div className="pricing">
                          <p className="price">
                            <span style={{ fontFamily: "Cabin" }}>đ {new Intl.NumberFormat().format(value.price)}</span>
                          </p>
                        </div>
                        <p className="bottom-area d-flex px-3">
                          <a href="#" className="add-to-cart text-center py-2 mr-1" onClick={() => handleAddToCartClick(value.productId)}>
                            <span>
                              Add to cart <i className="ion-ios-add ml-1" />
                            </span>
                          </a>

                          <a href="#" className="buy-now text-center py-2">
                            Buy now
                            <span>
                              <i className="ion-ios-cart ml-1" />
                            </span>
                          </a>
                        </p>
                      </div>

                    </div>
                  </div>
                ))}


              </div>
              {itemsToShow < product.length && (
                <div className="text-center mt-3">
                  <button style={{ width: "100px" }} className="btn btn-primary" onClick={handleLoadMore}>
                    Load More
                  </button>
                </div>
              )}
            </div>
            <div className="col-md-4 col-lg-2">

              <div className="sidebar">
                <div className="sidebar-box-2">
                  <h2 className="heading" style={{ color: "black" }}>Categories</h2>

                  <div className="item">
                    <a
                      href=""
                      className="link flex"
                      onClick={() => displayListProduct()}
                    >
                      <i className="bx bx-grid-alt"></i>
                      <span>All</span>
                    </a>
                  </div>
                  {productType.map((value, index) => {
                    return (
                      <div className="fancy-collapse-panel" key={index}>
                        <div
                          className="panel-group"
                          id="accordion"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div className="panel panel-default">
                            <div >
                              <a

                                href="#"
                                className="link flex"
                                onClick={() => handleDisplayByType(value.productTypeId)}

                              >
                                <i className="bx bx-home-alt"></i>
                                <span>{value.productTypeName}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}


                </div>
                <div className="sidebar-box-2">
                  <h2 className="heading">Price Range</h2>
                  <form method="post" className="colorlib-form-2">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="guests">Price from:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3" />
                            <select
                              name="people"
                              id="people"
                              className="form-control"
                            >
                              <option value="#">1</option>
                              <option value="#">200</option>
                              <option value="#">300</option>
                              <option value="#">400</option>
                              <option value="#">1000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="guests">Price to:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3" />
                            <select
                              name="people"
                              id="people"
                              className="form-control"
                            >
                              <option value="#">2000</option>
                              <option value="#">4000</option>
                              <option value="#">6000</option>
                              <option value="#">8000</option>
                              <option value="#">10000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4 ftco-animate">
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
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a
                href="images/gallery-1.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-1.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a
                href="images/gallery-2.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a
                href="images/gallery-3.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a
                href="images/gallery-4.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a
                href="images/gallery-5.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-5.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a
                href="images/gallery-6.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-6.jpg)" }}
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
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
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
                Copyright © All rights reserved | This template is made with{" "}
                <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>

  )
}
