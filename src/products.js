import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'vintage-timepieces-retail.myshopify.com',
  storefrontAccessToken: 'f06096e55a372bfc510526bfccb4e560'
});

export const fetchPopularProducts = async () => {
  const products = await client.product.fetchAll(8);
  console.log('Popular Products: ', products);

  return products;
}