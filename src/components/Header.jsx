import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SetCartTotal } from "../redux/action/CartAdd.action";
import { UserAccessaction } from "../redux/action/UserAccess.action";

const Header = () => {

    const [CartTotal, setCartTotal] = useState()
    const [Bool, setBool] = useState(false)
      
    const getCartData = useSelector((data) => data.CartAddreducer.cart)
    const getAccessToken = useSelector((key) => key.UserAccessreducer.AccessToken)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // ================== Total of All Cart Price ================
    useEffect(() => {
      const TotalPriceCart = getCartData.reduce((accu, curn) => {
          return accu + curn.quantity * curn.price
      },0)
      setCartTotal(TotalPriceCart)
      dispatch(SetCartTotal(TotalPriceCart))
    },[getCartData])

    // ================= Login || Logout Set ===================
    useEffect(() => {
      JSON.parse(localStorage.getItem('AccessKey')) === getAccessToken ? setBool(true) : setBool(false)
    },[])

    // ================= Logout ==================
    const OnClickLogout = () => {
      localStorage.removeItem('AccessKey')
      dispatch(UserAccessaction(''))
    }
    
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
                      {
                        Bool === false ?
                        <Link to={'/login'}>
                        <i className="fa fa-user" /> Login
                        </Link> : 
                        <Link to={'/login'} onClick={OnClickLogout}>
                        <i className="fa fa-user" /> Logout
                        </Link>
                      }
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
                      <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                      <Link to={"/shope"}>Shop</Link>
                    </li>
                    <li>
                      <Link>Pages</Link>
                      <ul className="header__menu__dropdown">
                        <li>
                          <Link to={"/cart"}>Shoping Cart</Link>
                        </li>
                        <li>
                          <Link to={"/checkout"}>Check Out</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li>
                      <Link to={'/contact'}>Contact</Link>
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
                    item: <span>${CartTotal}</span>
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
