import React, { useState } from "react";
import FruitData from '../fruits.json'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OnclickAddToCard from "../function/OnclickAddToCard";

const Home = () => {
  
  const [displayToggle, setdisplayToggle] = useState('none')

  const getCartData = useSelector((data) => data.CartAddreducer.cart)
  const getAccessToken = useSelector((key) => key.UserAccessreducer.AccessToken)

  const dispatch = useDispatch()
  const navigate = useNavigate()
    
  const onClickDropdown = () => {
      setdisplayToggle(displayToggle === 'block' ? 'none' : 'block')
  }

  // ======================= Add Product in Cart Page ========================== 
  const OnClickAddToCardRedirect = (Cart) => {
    OnclickAddToCard(Cart, getCartData, getAccessToken, dispatch)
  }

  // ========================== View Product ========================
  const OnClickView = (id) => {
    navigate('/viewproduct')
    localStorage.setItem('productID', id)
  }
  
  return (
    <>
      {/* Hero Section Begin */}
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div onClick={onClickDropdown} className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                <ul style={{display:displayToggle}}>
                  <li>
                    <a href="#">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Fruit &amp; Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#">Butter &amp; Eggs</a>
                  </li>
                  <li>
                    <a href="#">Fastfood</a>
                  </li>
                  <li>
                    <a href="#">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#">Papayaya &amp; Crisps</a>
                  </li>
                  <li>
                    <a href="#">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg"
                data-setbg="img/hero/banner.jpg"
                style={{ backgroundImage: 'url("img/hero/banner.jpg")' }}
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
    
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-2047px, 0px, 0px)",
                    transition: "all 1s ease 0s",
                    width: 3803,
                  }}
                >
                  <div className="owl-item cloned" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-2.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-2.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Dried Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-3.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-3.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Vegetables</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-4.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-4.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">drink fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-5.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-5.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">drink fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-1.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-1.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Fresh Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-2.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-2.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Dried Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-3.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-3.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Vegetables</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-4.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-4.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">drink fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-5.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-5.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">drink fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{ width: "292.5px" }}
                  >
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-1.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-1.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Fresh Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{ width: "292.5px" }}
                  >
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-2.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-2.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Dried Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-3.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-3.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">Vegetables</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "292.5px" }}>
                    <div className="col-lg-3">
                      <div
                        className="categories__item set-bg"
                        data-setbg="img/categories/cat-4.jpg"
                        style={{
                          backgroundImage: 'url("img/categories/cat-4.jpg")',
                        }}
                      >
                        <h5>
                          <a href="#">drink fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <span className="fa fa-angle-left">
                    <span />
                  </span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span className="fa fa-angle-right">
                    <span />
                  </span>
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
      </section>

      {/* ============= Featured Section Begin =================== */}
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter" id="MixItUpEEC660">
            {
              FruitData.map((i) => {
                return(
                  <div className={`col-lg-3 col-md-4 col-sm-6 mix ${i.filter}`}>
                    <div className="featured__item" onClick={() => navigate('')}>
                      <div className="featured__item__pic set-bg" data-setbg={i.image} style={{backgroundImage: `url(${i.image})`, backgroundSize: 'initial'}}>
                        <ul className="featured__item__pic__hover">
                          <li><a><i className="fa fa-heart" /></a></li>
                          <li><a><i className="fa fa-retweet" /></a></li>
                          <li onClick={() => OnClickAddToCardRedirect(i)}><a><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6><a>{i.name}</a></h6>
                        <h6><a>Stock : {i.totalQuantity}</a></h6>
                        <h5>${i.price}</h5>
                        <span onClick={() => OnClickView(i.id)} className="primary-btn">Buy Now</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>
      {/* ============= Featured Section End =================== */}

      {/* ========= Banner Begin =============== */}
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-1.jpg" alt />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-2.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========= Banner End =============== */}

      {/* ========== Blog Section Begin ================ */}
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-1.jpg" alt />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                    <li><i className="fa fa-comment-o" /> 5</li>
                  </ul>
                  <h5><a href="#">Cooking tips make cooking simple</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-2.jpg" alt />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                    <li><i className="fa fa-comment-o" /> 5</li>
                  </ul>
                  <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-3.jpg" alt />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                    <li><i className="fa fa-comment-o" /> 5</li>
                  </ul>
                  <h5><a href="#">Visit the clean farm in the US</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Blog Section End ================ */}
    </>
  );
};

export default Home;
