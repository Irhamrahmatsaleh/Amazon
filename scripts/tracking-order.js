// tracking-order.js

// Function to track order status
function trackOrder(orderId) {
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
  console.log(`Order ID: ${orderStatus.orderId}`);
  console.log(`Status: ${orderStatus.status}`);
  console.log(`Estimated Delivery: ${orderStatus.estimatedDelivery}`);
}

// Example usage
const orderId = '12345';
trackOrder(orderId);
