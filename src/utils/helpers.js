export const nameSorter = (prods) => {
  return prods.sort((a, b) => a.title.localeCompare(b.title));
};

export const priceSorterAsc = (prods) => {
  return prods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};
export const priceSorterDsc = (prods) => {
  return prods.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
};

export const prodsSorter = (type, prods) => {
  switch (type) {
    case "name":
      return nameSorter(prods);
    case "priceh":
      return priceSorterDsc(prods);
    case "pricel":
      return priceSorterAsc(prods);
    default:
      return;
  }
};
