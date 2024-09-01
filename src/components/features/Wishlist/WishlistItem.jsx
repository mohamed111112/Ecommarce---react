import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import Spinner from "../../ui/Spinner/Spinner";
import { CartContext } from "../../context/CartContext";

function WishlistItem({ product }) {
  const { addToCart, loading: cartLoding } = useContext(CartContext);
  const { removeFromWishlist, loading } = useContext(WishlistContext);

  function handleAddToCart(e, productId) {
    e.preventDefault();
    addToCart(productId);
  }

  function handleRemove(e) {
    e.preventDefault();
    removeFromWishlist(product._id);
  }

  return (
    <div class="row border-bottom my-3 d-flex align-items-center p-2">
      {(loading  || cartLoding) && <Spinner />}
      <div class="col-md-2">
        <img alt="" class="w-100" src={product.imageCover} />
      </div>
      <div class="col-md-10 d-flex justify-content-between">
        <div>
          <h5>
            {product.title.split(" ").length > 5
              ? `${product.title.split(" ").slice(0, 5).join(" ")}...`
              : product.title}
          </h5>
          <h6 class="text-success">149 EGP</h6>
          <button class="btn btn-sm m-0 p-0 text-danger" onClick={handleRemove}>
            <i class="fa fa-trash"></i> Remove
          </button>
        </div>
        <div>
          <button
            class="btn btn-outline-success mx-auto"
            onClick={(e) => handleAddToCart(e, product._id)}
          >
            add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
