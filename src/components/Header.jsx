import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const getCartData = useSelector((data) => data.CartAddreducer.cart)
    
  return (
    <>
      <div>
        <div className="humberger__menu__overlay" />
        {/* Header Section Begin */}
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope" /> hello@colorlib.com
                      </li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="header__top__right__language">
                      <img src="img/language.png" alt />
                      <div>English</div>
                      <span className="arrow_carrot-down" />
                      <ul>
                        <li>
                          <a href="#">Spanis</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <Link to={'/login'}>
                        <i className="fa fa-user" /> Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={""}>Shop</Link>
                    </li>
                    <li>
                      <Link to={""}>Pages</Link>
                      <ul className="header__menu__dropdown">
                        <li>
                          <Link to={""}>Shop Details</Link>
                        </li>
                        <li>
                          <Link to={""}>Shoping Cart</Link>
                        </li>
                        <li>
                          <Link to={""}>Check Out</Link>
                        </li>
                        <li>
                          <Link to={""}>Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="active">
                      <Link to={""}>Blog</Link>
                    </li>
                    <li>
                      <Link to={""}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" /> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <Link to={'/cart'}>
                        <i className="fa fa-shopping-bag" /> <span>{getCartData.length}</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    item: <span>$150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
      </div>
    </>
  );
};

export default Header;
