// Custom JavaScript for EmporifyX

// Example function for adding product to cart
function addToCart(productId) {
    console.log('Product added to cart: ' + productId);
  }
  
  // forget password
  // Custom JavaScript for EmporifyX forgot password page

document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  // Simulate sending email
  setTimeout(() => {
    if (email) {  // You can add more sophisticated email validation and server-side request here
      document.getElementById('email-sent').style.display = 'block';
      document.getElementById('email-error').style.display = 'none';
    } else {
      document.getElementById('email-sent').style.display = 'none';
      document.getElementById('email-error').style.display = 'block';
    }
  }, 1000);
});

// cart
// Custom JavaScript for EmporifyX cart page

document.addEventListener('DOMContentLoaded', function() {
  updateCartTotal();

  // Update cart total when quantity changes
  document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('change', function() {
      if (this.value < 1) this.value = 1; // Ensure quantity is at least 1
      updateCartTotal();
    });
  });

  // Remove item from cart
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.cart-item').remove();
      updateCartTotal();
    });
  });
});

// Function to update the cart total
function updateCartTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseFloat(item.querySelector('.quantity').getAttribute('data-price'));
    const quantity = parseInt(item.querySelector('.quantity').value);
    total += price * quantity;
  });
  document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
}
