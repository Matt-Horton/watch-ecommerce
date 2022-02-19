import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BuyButton from '../../components/BuyButton.js/BuyButton';
import SizeSelect from '../../components/SizeSelect/SizeSelect';
import { fetchProduct } from '../../products';
import './Product.scss';
import { useCheckoutContext } from '../../context/CheckoutContext';

export default function Product() {

  const { addItemToCart } = useCheckoutContext();

  // Access Product ID from URL param
  let { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    (async function () {
      try {
        const retrievedProduct = await fetchProduct(id);
        setProduct(retrievedProduct);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  const addToCart = () => {
    console.log(`Adding item to cart with ID: ${id}`);

    addItemToCart(id);
  }

  return (
    <>
      {product &&
        <div className="product-info-container">
          <div className="product-info-image-container">
            <img src={product.images[0].src} className="product-image-preview" />
          </div>
          <div className="product-info-container">
            <div className="product-info">
              <h4 className="product-info-brand">{product.options[1].values[0].value}</h4>
              <h1 className="product-info-title">{product.title}</h1>
              <h5 className="product-info-price">£{product.variants[0].price}</h5>
              <p className="product-info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam id orci pellentesque, aliquam sapien et, porttitor nunc. Nullam at risus efficitur.</p>
              <div className="product-info-buttons">
                <SizeSelect />
                <BuyButton onPress={addToCart} />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
