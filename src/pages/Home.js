import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Catalog from '../components/Catalog/Catalog';
import Subscribe from '../components/Subscribe/Subscribe';
import PopularProducts from '../components/PopularProducts/PopularProducts';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Catalog />
      <Subscribe />
      <PopularProducts />
    </>
  );
}
