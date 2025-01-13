import { cart } from '../data/cart';

function orderBy(order, options) {
  return cart.sort((a, b) => {
    if (a[order] < b[order]) {
      return options.ascending ? -1 : 1;
    }
    if (a[order] > b[order]) {
      return options.ascending ? 1 : -1;
    }
    return 0;
  });
}


export default orderBy;
