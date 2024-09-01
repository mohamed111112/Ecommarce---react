import { useContext, useEffect } from "react";
import styles from "./Wishlist.module.css";
import { WishlistContext } from "../../context/WishlistContext";
import WishlistItem from "./WishlistItem";
import Spinner from "../../ui/Spinner/Spinner";

function Wishlist() {
  const { getWishlist, loading, wishlist } = useContext(WishlistContext);

  useEffect(() => {
    getWishlist();
  }, [getWishlist]);

  return (
    <section className="container">
      {loading && <Spinner />}
      <div className={styles.wishlist}>
        <h2 className="fw-semibold border-bottom pb-2 mb-4">My Wishlist</h2>
        {wishlist?.data?.data?.map((product) => (
          <WishlistItem product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
