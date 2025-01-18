// tracking-order.js

import { cart } from '../data/cart.js';
import { products } from '../data/products.js';

// Function to track order status
export function trackOrder(orderId) {
  // Simulate an API call to get order status
  const orderStatus = getOrderStatusFromAPI(orderId);

  // Display order status
  displayOrderStatus(orderStatus);
}

// Simulated function to get order status from an API
function getOrderStatusFromAPI(orderId) {
  // This is a mock function. Replace with actual API call.
  const mockOrderStatus = {
    orderId: orderId,
    status: 'Shipped',
    estimatedDelivery: '2023-10-15'
  };
  return mockOrderStatus;
}

// Function to display order status
function displayOrderStatus(orderStatus) {
  const orderStatusContainer = document.querySelector('.js-order-status');
  orderStatusContainer.innerHTML = `
    <div>Order ID: ${orderStatus.orderId}</div>
    <div>Status: ${orderStatus.status}</div>
    <div>Estimated Delivery: ${orderStatus.estimatedDelivery}</div>
  `;
}

// Function to display order summary
export function displayOrderSummary() {
  let orderSummaryHTML = '';

  cart.forEach((cartItem) => {
    const product = products.find((product) => product.id === cartItem.productId);
    orderSummaryHTML += `
      <div class="order-item">
        <img src="${product.image}" alt="${product.name}" class="order-item-image">
        <div class="order-item-details">
          <div class="order-item-name">${product.name}</div>
          <div class="order-item-quantity">Quantity: ${cartItem.quantity}</div>
          <div class="order-item-price">$${(product.priceCents / 100).toFixed(2)}</div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-order-summary').innerHTML = orderSummaryHTML;
}
