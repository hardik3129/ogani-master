import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FruitData from "../fruits.json";
import { toast } from "react-toastify";
import { CartAddaction } from "../redux/action/CartAdd.action";

const Shope = () => {
  const dispatch = useDispatch();

  const getCartData = useSelector((data) => data.CartAddreducer.cart);

  // ======================= Add Product in Cart Page ==========================
  const OnClickAddToCard = (Cart) => {
    if (getCartData.find((i) => i.id == Cart.id)) {
      toast.info(`Allready ${Cart.name} Add To Cart`);
    } else {
      const filter = FruitData.find((i) => i.id === Cart.id);
      toast.success(`Successfully ${Cart.name} Add to Cart`);
      dispatch(CartAddaction(filter));
    }
  };

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
                <h2>Organi Shop</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Organi Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
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
                  </ul>
                </div>
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min={10}
                      data-max={540}
                    >
                      <div className="ui-slider-range ui-corner-all ui-widget-header" />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      />
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  <div className="sidebar__item__color sidebar__item__color--white">
                    <label htmlFor="white">
                      White
                      <input type="radio" id="white" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--gray">
                    <label htmlFor="gray">
                      Gray
                      <input type="radio" id="gray" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--red">
                    <label htmlFor="red">
                      Red
                      <input type="radio" id="red" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--black">
                    <label htmlFor="black">
                      Black
                      <input type="radio" id="black" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--blue">
                    <label htmlFor="blue">
                      Blue
                      <input type="radio" id="blue" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--green">
                    <label htmlFor="green">
                      Green
                      <input type="radio" id="green" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  <div className="sidebar__item__size">
                    <label htmlFor="large">
                      Large
                      <input type="radio" id="large" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="medium">
                      Medium
                      <input type="radio" id="medium" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="small">
                      Small
                      <input type="radio" id="small" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="tiny">
                      Tiny
                      <input type="radio" id="tiny" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row">
                  {/* <div className="product__discount__slider owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                        {
                            FruitData.map((i) => {
                                return(
                                    <div className="owl-item cloned" style={{width: '292.5px'}}>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="img/product/discount/pd-4.jpg" style={{backgroundImage: 'url("img/product/discount/pd-4.jpg")'}}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div> */}
                  <div className="owl-carousel owl-loaded owl-drag product__discount__slider">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(-1462px, 0px, 0px)",
                          transition: "all 1.2s ease 0s",
                          width: 3510,
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-4.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-4.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-5.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-5.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-6.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-6.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item" style={{ width: "292.5px" }}>
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-1.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-1.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item" style={{ width: "292.5px" }}>
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-2.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-2.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Vegetables</span>
                                <h5>
                                  <a href="#">Vegetables’package</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-3.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-3.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Mixed Fruitss</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-4.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-4.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-5.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-5.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item" style={{ width: "292.5px" }}>
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-6.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-6.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-1.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-1.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Raisin’n’nuts</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-2.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-2.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Vegetables</span>
                                <h5>
                                  <a href="#">Vegetables’package</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "292.5px" }}
                        >
                          <div className="col-lg-4">
                            <div className="product__discount__item">
                              <div
                                className="product__discount__item__pic set-bg"
                                data-setbg="img/product/discount/pd-3.jpg"
                                style={{
                                  backgroundImage:
                                    'url("img/product/discount/pd-3.jpg")',
                                }}
                              >
                                <div className="product__discount__percent">
                                  -20%
                                </div>
                                <ul className="product__item__pic__hover">
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-retweet" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="product__discount__item__text">
                                <span>Dried Fruit</span>
                                <h5>
                                  <a href="#">Mixed Fruitss</a>
                                </h5>
                                <div className="product__item__price">
                                  $30.00 <span>$36.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav disabled">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                      >
                        <span aria-label="Previous">‹</span>
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                      >
                        <span aria-label="Next">›</span>
                      </button>
                    </div>
                    <div className="owl-dots">
                      <button role="button" className="owl-dot active">
                        <span />
                      </button>
                      <button role="button" className="owl-dot">
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__item">
                {/* ========== Product Found Section ============ */}
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select style={{display: 'none'}}>
                        <option value={0}>Default</option>
                        <option value={0}>Default</option>
                      </select><div className="nice-select" tabIndex={0}><span className="current">Default</span><ul className="list"><li data-value={0} className="option selected focus">Default</li><li data-value={0} className="option">Default</li></ul></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2" />
                      <span className="icon_ul" />
                    </div>
                  </div>
                </div>
              </div>
              {/* ========== All Shope Product Here ==============*/}
              <div className="row">
                {FruitData.map((i) => {
                  return (
                    <div
                      className={`col-lg-4 col-md-4 col-sm-6 mix ${i.filter}`}
                    >
                      <div className="featured__item">
                        <div
                          className="featured__item__pic set-bg"
                          data-setbg={i.image}
                          style={{
                            backgroundImage: `url(${i.image})`,
                            backgroundSize: "initial",
                          }}
                        >
                          <ul className="featured__item__pic__hover">
                            <li>
                              <a>
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li onClick={() => OnClickAddToCard(i)}>
                              <a>
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="featured__item__text">
                          <h6>
                            <a>{i.name}</a>
                          </h6>
                          <h5>${i.price}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
};

export default Shope;
