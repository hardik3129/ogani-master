import { Link } from "react-router-dom";

const HumbergerMenu = ({
  menubarToggle,
  getCartData,
  getAccessToken,
  CartTotal,
  Bool,
  UserEmail,
  OnClickLogout, // function
  humberger__open // function
}) => {
  return (
    <div>
      {/* Humberger Begin */}
      <div
        className={`humberger__menu__overlay ${
          menubarToggle === true ? "active" : ""
        }`}
        onClick={humberger__open}
      />
      <div
        className={`humberger__menu__wrapper ${
          menubarToggle === true ? "show__humberger__menu__wrapper" : ""
        }`}
      >
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="img/logo.png" alt />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <Link to={"/cart"} onClick={humberger__open}>
                <i className="fa fa-shopping-bag" />
                <span>
                  {getCartData.filter((i) => i.uid == getAccessToken).length}
                </span>
              </Link>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>${CartTotal}</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
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
            {Bool === false ? (
              <Link to={"/login"}>
                <i className="fa fa-user" /> Login
              </Link>
            ) : (
              <Link to={"/login"} onClick={OnClickLogout}>
                <i className="fa fa-user" /> Logout
              </Link>
            )}
          </div>
        </div>
        <div id="mobile-menu-wrap">
          <div className="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
              role="button"
              tabIndex={0}
              className="slicknav_btn slicknav_collapsed"
              style={{}}
            >
              <span className="slicknav_menutxt">MENU</span>
              <span className="slicknav_icon">
                <span className="slicknav_icon-bar" />
                <span className="slicknav_icon-bar" />
                <span className="slicknav_icon-bar" />
              </span>
            </a>
            <nav
              className="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              style={{ display: "none" }}
            >
              <ul>
                <li>
                  <Link onClick={humberger__open} to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={humberger__open} to={"/shope"}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link onClick={humberger__open} to={"/cart"}>
                    Shoping Cart
                  </Link>
                </li>
                <li>
                  <Link onClick={humberger__open} to={"/checkout"}>
                    Check Out
                  </Link>
                </li>
                <li>
                  <Link onClick={humberger__open} to={"/blog"}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link onClick={humberger__open} to={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> {UserEmail}
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      {/* Humberger End */}
    </div>
  );
};

export default HumbergerMenu;
