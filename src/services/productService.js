export const fetchProducts = async () => {
  try {
    const resp = await fetch(
      "https://cors-anywhere.herokuapp.com/https://staging.flowerchimp.com/asset/json/products.json"
    );
    const data = await resp.json();
    return data.products;
  } catch (error) {
    throw new Error(error);
  }
};
