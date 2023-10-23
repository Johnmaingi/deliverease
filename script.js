<script>
    function addToCart(productId, productPrice, productName) {
        if (localStorage.getItem('cartItems')) {
            // If the cartItems key exists in local storage, retrieve its value and parse it
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));
            
            // Check if the product already exists in the cart
            const existingProductIndex = cartItems.findIndex(item => item.productId === productId);
            
            if (existingProductIndex !== -1) {
                // If the product already exists, update its quantity
                cartItems[existingProductIndex].quantity++;
            } else {
                // If the product doesn't exist, add it to the cart
                cartItems.push({ productId, productName, productPrice, quantity: 1 });
            }
            
            // Store the updated cartItems array in local storage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            // If the cartItems key doesn't exist, create a new array and add the product
            const cartItems = [{ productId, productName, productPrice, quantity: 1 }];
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        
        // Redirect the user to the cart.html page
        window.location.href = 'cart.html';
    }
</script>
