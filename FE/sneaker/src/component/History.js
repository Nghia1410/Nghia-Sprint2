import React, { useEffect, useState } from 'react';
import * as UserService from "../service/userService";
import * as CartService from "../service/cartService";

export function History() {
  const [userId, setUserId] = useState(0);
  const username = sessionStorage.getItem('USERNAME');
  const [history, setHistory] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");

  function handleShowModal(
    price,
    image,
    productName,
    amount

  ) {
    setPrice(price);
    setImage(image);
    setProductName(productName)
    setAmount(amount)
  }

  useEffect(() => {
    const getUserName = async () => {
      const rs = await UserService.findUserName(username);
      setUserId(rs);
    };
    getUserName();
  }, [username]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const rs = await CartService.findAllHistory(userId);
        setHistory(rs);
      } catch (error) {
        console.log(error);
      }
    };

    getHistory();
  }, [userId]);

  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{
          backgroundImage: 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLanpk4gyTqXy4PldodqlzY2IHBH2c3ZOYKxdCOPVNoiFJ_xMB")',
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
                  width: "100%",
                  fontWeight: 'bold',
                  fontFamily: "fantasy"
                }}
              >
                ORDER HISTORY
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code</th>
                  <th>Name Customer</th>
                  <th>Day Paypal</th>
                  <th>Total</th>
                  <th>Detail</th>

                </tr>
              </thead>
              <tbody>
                {history?.map((order, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{order.codeBill}</td>
                    <td>{order.username}</td>
                    <td>{order.orderDate}</td>
                    <td style={{ fontFamily: "Cabin" }}>
                      {new Intl.NumberFormat().format(order.total)}VNĐ
                    </td>
                    <td>
                      <button
                        className="btn btn-light d-none d-sm-table-cell"
                        onClick={() =>
                          handleShowModal(
                            order.total,
                            order.image,
                            order.productName,
                            order.amount
                          )
                        }
                        data-bs-target="#staticBackdrop"
                        data-bs-toggle="modal"
                        type="button"
                      >
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/bulleted-list.png"
                          alt="bulleted-list"
                        />
                      </button>
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content bg-light"
            style={{ background: "none", marginTop: "5rem" }}
          >
            <div className="modal-header">
              <h5
                className=" navbar-brand "
                id="staticBackdropLabel"
                style={{
                  marginLeft: 200,
                  fontSize: 25
                }}
              >
                Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" style={{ backgroundColor: "white" }}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-md-12"
                    style={{ display: "inline-block", marginTop: "20px" }}
                  >
                    <p className="text-muted">
                      Name Product: <strong>{productName}</strong>
                    </p>
                    <p className="text-muted">
                      Price: <strong> {Intl.NumberFormat().format(price)} VND
                      </strong>
                    </p>

                    <p className="text-muted">
                      <img style={{ width: 432, textAlign: "center" }} src={image} alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ background: "#ea845b", border: "none" }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
