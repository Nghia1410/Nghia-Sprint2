export const Cart = ({  }) => {
    return (
        <>

            {/* <nav
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
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link" href="/shop">
                                    Shop
                                </a>

                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item cta cta-colored">
                                <a href="/cart" className="nav-link">
                                    <span className="icon-shopping_cart" />
                                    [0]
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            {/* END nav */}
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
                                        {/* {cartItems.map((item, index) => ( */}
                                            < tr className="text-center"
                                            //  key={index} 
                                             >
                                                <td className="product-remove">
                                                    <a href="#">
                                                        <span className="ion-ios-close" />
                                                    </a>
                                                </td>
                                                <td className="image-prod">
                                                    <div
                                                        className="img"
                                                        // style={{ backgroundImage: `url(${item.image})` }}
                                                    />
                                                </td>
                                                <td className="product-name">
                                                    {/* <h3>{item.nameProduct}</h3> */}
                                                    <p>
                                                        Far far away, behind the word mountains, far from the
                                                        countries
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    {/* {item.price} */}
                                                    </td>
                                                <td className="quantity">
                                                    <div className="input-group mb-3">
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            className="quantity form-control input-number"
                                                            defaultValue={1}
                                                            min={1}
                                                            max={100}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="total">$4.90</td>
                                            </tr>

                                        {/* ))} */}

                                        {/* END TR*/}
                                        <tr className="text-center">
                                            <td className="product-remove">
                                                <a href="#">
                                                    <span className="ion-ios-close" />
                                                </a>
                                            </td>
                                            <td className="image-prod">
                                                <div
                                                    className="img"
                                                    style={{ backgroundImage: "url(images/product-4.jpg)" }}
                                                />
                                            </td>
                                            <td className="product-name">
                                                <h3>Nike Free RN 2019 iD</h3>
                                                <p>
                                                    Far far away, behind the word mountains, far from the
                                                    countries
                                                </p>
                                            </td>
                                            <td className="price">$15.70</td>
                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        className="quantity form-control input-number"
                                                        defaultValue={1}
                                                        min={1}
                                                        max={100}
                                                    />
                                                </div>
                                            </td>
                                            <td className="total">$15.70</td>
                                        </tr>
                                        {/* END TR*/}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p className="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span>$17.60</span>
                                </p>
                            </div>
                            <p className="text-center">
                                <a href="checkout.html" className="btn btn-primary py-3 px-4">
                                    Proceed to Checkout
                                </a>
                            </p>
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
        </>
    )


}