import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartDecrement,
  CartDeleteaction,
  CartIncrement,
} from "../redux/action/CartAdd.action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const CartTotal = useSelector((data) => data.CartAddreducer.cartTotal);

  // ============== variable store Hook ==============
  const dispatch = useDispatch();

  // ========= global data to redux =============
  const getCartData = useSelector((data) => data.CartAddreducer.cart);

  return (
    <>
      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
        style={{ backgroundImage: 'url("img/breadcrumb.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Shopping Cart</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Shopping Cart Begin */}
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {getCartData.map((i) => {
                      return (
                        <tr>
                          <td className="shoping__cart__item">
                            <div className="cart__img">
                              <img src={i.image} alt />
                            </div>
                            <h5>{i.name}</h5>
                          </td>
                          <td className="shoping__cart__price">${i.price}</td>
                          <td className="shoping__cart__quantity">
                            <div className="quantity">
                              <div className="pro-qty">
                                <span
                                  onClick={() => i.quantity === 1 ? false : dispatch(CartDecrement(i.id))}
                                  className="dec qtybtn"
                                >
                                  -
                                </span>
                                <input type="text" value={i.quantity} />
                                <span
                                  className="inc qtybtn"
                                  onClick={() => i.quantity === i.totalQuantity ? toast.info("Product limite is over") : dispatch(CartIncrement(i.id))}
                                >
                                  +
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="shoping__cart__total">
                            ${i.quantity * i.price}
                          </td>
                          <td
                            onClick={() => dispatch(CartDeleteaction(i.id))}
                            className="shoping__cart__item__close"
                          >
                            <span className="icon_close" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="#" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="js:" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading" />
                  Upadate Cart
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>${CartTotal}</span>
                  </li>
                  <li>
                    Total <span>${CartTotal}</span>
                  </li>
                </ul>
                <Link to={"/checkout"} className="primary-btn">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shopping Cart End */}
    </>
  );
};

export default Cart;
