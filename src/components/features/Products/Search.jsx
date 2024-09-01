import React, { useEffect } from 'react'

export default function Search({ setFilteredProducts, getProducts, products }) {

  function handleChange(e) {
    const data = products.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (data) setFilteredProducts(data);
  }

  useEffect(() => {
    if (products?.length > 0) return;
    getProducts();
  }, [products?.length, getProducts]);
  return (
    <form className="container mt-5 mb-4">
      <div className="form-group">
        <label htmlFor="search" className="visually-hidden">
          Search for a product
        </label>
        <input
          type="search"
          className="form-control"
          id="search"
          placeholder="Search for a product"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
