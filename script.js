const products = [

    {
        name: "Blessings Classic T-Shirt",
        category: "T-Shirts",
        price: 399,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Black Cap",
        category: "Caps",
        price: 249,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Street Trousers",
        category: "Trousers",
        price: 599,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Classic Watch",
        category: "Watches",
        price: 899,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Premium T-Shirt",
        category: "T-Shirts",
        price: 449,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Premium Cap",
        category: "Caps",
        price: 299,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Cargo Trousers",
        category: "Trousers",
        price: 699,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    },

    {
        name: "Blessings Gold Watch",
        category: "Watches",
        price: 1299,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"
    }

];


let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts(list = products) {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    list.forEach((product, index) => {

        container.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    class="product-image"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${product.category}</p>

                    <div class="price">
                        R${product.price}
                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${index})"
                    >
                        ADD TO CART
                    </button>

                </div>

            </div>

        `;

    });

}


/* FILTER */

function filterProducts(category) {

    const filtered =
        products.filter(
            product => product.category === category
        );

    displayProducts(filtered);

    document
        .getElementById("shop")
        .scrollIntoView();
}


/* ADD CART */

function addToCart(index) {

    cart.push(products[index]);

    updateCart();

    alert(
        products[index].name +
        " added to your cart!"
    );

}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cartCount")
        .textContent = cart.length;

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

            <div class="cart-product">

                <span>
                    ${item.name}
                </span>

                <strong>
                    R${item.price}
                </strong>

            </div>

        `;

    });

    document.getElementById("cartTotal")
        .textContent = total;

}


/* OPEN CART */

function openCart() {

    document.getElementById("cart")
        .style.display = "flex";

}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cart")
        .style.display = "none";

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    alert(
        "Checkout system coming next. We will connect your store to real payments."
    );

}


/* EMAIL */

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    alert(
        "Thank you! " +
        email +
        " has joined the BLESSINGS family."
    );

}


/* START */

displayProducts();