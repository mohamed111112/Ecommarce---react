import MainSlider from "./MainSlider";
import img_1 from "../../../assets/images/photo-1546069901-ba9599a7e63c.jpg";
import img_2 from "../../../assets/images/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg";
import styles from "./Home.module.css";
import CategoriesSlider from "./CategoriesSlider";
import ProductsList from "../../features/Products/ProductsList";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Spinner from "../../ui/Spinner/Spinner";
import { CategoriesContext } from "../../context/CategoriesContext";
import Pagination from "../../ui/Pagination/Pagination";
import Search from "../../features/Products/Search";

function Home() {
  const { products, getProducts, metaData, loading, error } =
    useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const {
    categories,
    getCategories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useContext(CategoriesContext);

  useEffect(() => {
    if (!categories?.length > 0) {
      getCategories();
    }
    if (products?.length > 0) return;
    getProducts();
  }, [products?.length, getProducts, categories?.length, getCategories]);

  return (
    <>
      <section
        className={`container d-flex ${styles.mainSlider}`}
      >
        {(loading || categoriesLoading) && <Spinner />}
        <MainSlider />

        <div className={styles.images}>
          <div style={{ width: "300px", height: "200px" }}>
            <img
              src={img_1}
              alt="Salad"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
          <div style={{ width: "300px", height: "200px" }}>
            <img
              src={img_2}
              alt="Salad"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </section>
      <section className={`${styles.categoriesSlider} container`}>
        {categories && <CategoriesSlider categories={categories} />}
        {categoriesError && !categories && (
          <p className="text-center text-danger my-5">
            Couldn't get the categories, please refresh the page.
          </p>
        )}
      </section>
      <Search
        setFilteredProducts={setFilteredProducts}
        getProducts={getProducts}
        products={products}
      />
      <section className="container">
        {error && (
          <p className="text-center text-danger my-5">
            Couldn't get the products, please refresh the page.
          </p>
        )}
        <ProductsList products={filteredProducts || products} />
        <Pagination
          metaData={metaData}
          handleNext={() => getProducts(metaData?.nextPage)}
          handlePrev={() => getProducts(metaData?.prevPage)}
          handleNavigate={getProducts}
        />
      </section>
    </>
  );
}

export default Home;
