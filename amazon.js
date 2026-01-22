export function getAmazonProduct() {
  const TAG = process.env.AMAZON_TAG;

  // Produto de exemplo (depois dá pra automatizar)
  return {
    title: "Aparador Philips OneBlade Pro",
    price: "279,90",
    oldPrice: "424,90",
    url: `https://www.amazon.com.br/dp/B0B123EXEMPLO?tag=${TAG}`
  };
}
