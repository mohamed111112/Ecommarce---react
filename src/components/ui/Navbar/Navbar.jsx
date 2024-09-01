import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../assets/images/freshcart-logo.svg";
import { BiLogOutCircle } from "react-icons/bi";
import Button from "../Button/Button";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

function Navbar() {
  const user = useContext(userContext);
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  function handleLogout() {
    user?.setUser(null);
    toast.success("Logged out successfully");
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <header className="fixed-top bg-body-tertiary">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 me-auto mb-2 mb-lg-0">
              {user && user.user ? (
                <div className="d-flex justify-content-center flex-column flex-lg-row justify-content-lg-end w-100">
                  <div className="d-flex justify-content-center flex-column flex-lg-row justify-content-lg-end w-100">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/wishlist">
                        Wishlist
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/categories">
                        Categories
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/brands">
                        Brands
                      </NavLink>
                    </li>
                  </div>
                  <div className="d-flex justify-content-centern align-items-center flex-column flex-lg-row justify-content-lg-end w-100">
                    <li className="me-4  mb-3 mb-lg-0 ">
                      <Link
                        to="/cart"
                        className={styles.cartButton}
                        data-cart-items={
                          cart?.cart?.data?.numOfCartItems
                            ? cart?.cart?.data?.numOfCartItems
                            : "0"
                        }
                      >
                        <AiOutlineShoppingCart />
                      </Link>
                    </li>
                    <li>
                      <Button
                        handleClick={handleLogout}
                        moreStyles={{
                          "--color": "var(--main-color)",
                          "--background-color": "#fff",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <BiLogOutCircle style={{ fontSize: "1.25rem" }} />{" "}
                        Logout
                      </Button>
                    </li>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center flex-column flex-lg-row justify-content-lg-end w-100">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Register">
                      Register
                    </NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
