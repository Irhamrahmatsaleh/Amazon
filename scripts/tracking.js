
import { cart, addToCart } from './data/cart.js';
import { products } from './data/products.js';
import orderBy from './utils/orders.js';
import { updateCartQuantity } from './utils/cart.js';

let productsHTML = '';

products.forEach((products) => {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-price">$${product.price}</div>

          <button class="js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
    </div>
  `;
})

function addProductToCart(product) {
  const existingCartItem = cart.find((cartItem) => cartItem.productId === product.id);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartQuantity();
}
