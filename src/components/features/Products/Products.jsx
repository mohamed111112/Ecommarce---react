import { useContext, useState } from "react";
import ProductsList from "./ProductsList";
import { ProductsContext } from "../../context/ProductsContext";
import Spinner from "../../ui/Spinner/Spinner";
import Search from "./Search";

function Products() {
  const { products, getProducts, loading, error } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  return (
    <>
      <Search
        setFilteredProducts={setFilteredProducts}
        getProducts={getProducts}
        products={products}
      />
      <section className="container">
        <ProductsList products={filteredProducts || products} />
        {error && (
          <p className="text-danger mb-0">
            Couldn't get the products, please refresh the page
          </p>
        )}
        {loading && <Spinner />}
      </section>
    </>
  );
}

export default Products;
