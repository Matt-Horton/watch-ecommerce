import React, { useEffect, useState } from 'react';
import './PopularProducts.scss';
import { fetchPopularProducts } from '../../products';
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';


export default function PopularProducts() {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const retrievedProducts = await fetchPopularProducts();

      setPopularProducts(retrievedProducts);

      for (let popProduct in retrievedProducts) {
        console.log(popProduct.options.find(option => option.name === 'Brand').values[0].value);
      }
    };

    fetchProducts();
  }, []);

  const parseProductBrand = (product) => {

    let brand = product.options.find(option => option.name === 'Brand');

    return brand ? brand.values[0].value : "";
  }

  return (
    <section className="popular-products-section">
      <div className="container">
        <h3>Popular Products</h3>
        <div className="products-container">
          {popularProducts.map(product => {
            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="product">
                  <img src={product.images[0].src} className="product-image" />
                  <div className="popular-product-info-container">
                    <div className="popular-product-info">
                      <h4 className="product-title">{product.title}</h4>
                      <h5 className="product-brand">{parseProductBrand(product)}</h5>
                      <HiOutlineHeart size={20} className="product-favorite" />
                      <HiOutlineShoppingCart size={20} className="product-basket" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
