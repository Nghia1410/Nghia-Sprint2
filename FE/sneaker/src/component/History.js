import React, { useEffect, useState } from 'react';
import * as UserService from "../service/userService";
import * as CartService from "../service/cartService";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


export function History() {
  const [userId, setUserId] = useState(0);
  const username = sessionStorage.getItem('USERNAME');
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

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

  if (!sessionStorage.getItem("roles")) {

    Swal.fire({
      title: 'Notification!',
      text: `You must login to see your cart`,
      icon: 'error',
      confirmButtonText: 'OK',
    });
    navigate("/login")
    return null

  }

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
                </tr>
              </thead>
              <tbody>
                {history?.map((order, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{order.codeBill}</td>
                    <td>{order.user.username}</td>
                    <td>{order.orderDate}</td>
                    <td style={{ fontFamily: "Cabin" }}>
                      {new Intl.NumberFormat().format(order.total)}VNĐ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
