import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styles from "./Products.module.css";
import { AiFillStar } from "react-icons/ai";
import Button from "../../ui/Button/Button";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import Spinner from "../../ui/Spinner/Spinner";
import {
  FaCartPlus,
  FaHeartCircleCheck,
  FaHeartCirclePlus,
} from "react-icons/fa6";
import ProductSlider from "./ProductSlider";
import { ProductsContext } from "./../../context/ProductsContext";

function Product() {
  const product = useLoaderData();
  const { addToCart, loading } = useContext(CartContext);
  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    loading: Wishlist_Loading,
  } = useContext(WishlistContext);
  const {
    products,
    getProducts,
    loading: productsLoading,
  } = useContext(ProductsContext);

  const inWishlist = wishlist?.data?.data.find((el) => el._id === product._id)
    ? true
    : false;
  function handleAddToWish(e, productId) {
    e.preventDefault();
    addToWishlist(productId);
  }

  function handleRemoveFromWishlist(e, productId) {
    e.preventDefault();
    removeFromWishlist(productId);
  }
  useEffect(() => {
    if (products?.length > 0) return;
    getProducts();
  }, [products?.length, getProducts]);

  return (
    <section className="container mt-5">
      {(loading || productsLoading || Wishlist_Loading) && <Spinner />}

      <div className="row g-3 g-md-5">
        <div className="col-12 col-md-4">
          <ProductSlider images={product.images} title={product.title} />
        </div>
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
          <div>
            <h3 className="fw-semibold">{product.title}</h3>
            <p className="text-secondary">{product.description}</p>
            <p className="mb-1">
              <span className="fw-semibold">Category:</span>{" "}
              {product.category.name}
            </p>
            <p className="mb-1">
              <span className="fw-semibold">Sub-Category:</span>{" "}
              {product.subcategory.reduce((acc, curr, i, arr) => {
                if (i < arr.length - 1) {
                  return (acc += `${curr.name} - `);
                } else {
                  return (acc += `${curr.name}`);
                }
              }, "")}
            </p>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.footer} mt-auto`}
            >
              {product.priceAfterDiscount &&
              product.priceAfterDiscount !== product.price ? (
                <p className="mb-0 fw-semibold fs-2">
                  <del className="text-secondary me-2 fw-normal text-danger text-opacity-75">
                    {product.price}
                  </del>
                  <ins className="text-decoration-none">
                    {product.priceAfterDiscount}
                  </ins>{" "}
                  <span className="fs-5 text-secondary">EGP</span>
                </p>
              ) : (
                <p className="mb-0 fw-semibold fs-2">
                  {product.price}{" "}
                  <span className="fs-5 text-secondary">EGP</span>
                </p>
              )}
              <span className="fs-3 d-flex align-items-center gap-2">
                <AiFillStar /> {product.ratingsAverage}{" "}
                <span className="fs-5 text-secondary fw-semibold">
                  ({product.ratingsQuantity})
                </span>
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <Button
                handleClick={() => addToCart(product._id)}
                moreClasses="mt-3 w-75"
              >
                <FaCartPlus />
                Add to cart
              </Button>
              <div
                className={inWishlist ? styles.addedToWish : styles.addToWish}
                onClick={(e) =>
                  inWishlist
                    ? handleRemoveFromWishlist(e, product._id)
                    : handleAddToWish(e, product._id)
                }
              >
                <button className="mt-3">
                  {" "}
                  {inWishlist ? <FaHeartCircleCheck /> : <FaHeartCirclePlus />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const res = await axios(
    `https://ecommerce.routemisr.com/api/v1/products/${params.productId}`
  );
  if (res.statusText === "OK") return res.data.data;
  return null;
}

export default Product;
