// /home/irham/Desktop/javascript-amazon-project/scripts/payment.js

// Payment module for handling payment processing

// Mock data for demonstration purposes
const users = [
  { id: 1, name: 'John Doe', balance: 100 },
  { id: 2, name: 'Jane Smith', balance: 200 }
];

const products = [
  { id: 1, name: 'Laptop', price: 150 },
  { id: 2, name: 'Phone', price: 80 }
];

// Function to find user by ID
function findUserById(userId) {
  return users.find(user => user.id === userId);
}

// Function to find product by ID
function findProductById(productId) {
  return products.find(product => product.id === productId);
}

// Function to process payment
function processPayment(userId, productId) {
  const user = findUserById(userId);
  const product = findProductById(productId);

  if (!user) {
    return { success: false, message: 'User not found' };
  }

  if (!product) {
    return { success: false, message: 'Product not found' };
  }

  if (user.balance < product.price) {
    return { success: false, message: 'Insufficient balance' };
  }

  user.balance -= product.price;
  return { success: true, message: 'Payment successful', remainingBalance: user.balance };
}

// Example usage
const userId = 1;
const productId = 1;
const paymentResult = processPayment(userId, productId);

console.log(paymentResult);

// Export functions for testing or further usage
module.exports = {
  findUserById,
  findProductById,
  processPayment
};
