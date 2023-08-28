document.addEventListener("DOMContentLoaded", function () {
    const carrito = [];
  
    const updateCartTotal = () => {
      const cartTotal = document.getElementById("cartTotal");
      const totalPrice = carrito.reduce((total, item) => total + item.price, 0);
      cartTotal.textContent = totalPrice.toFixed(2);
    };
  
    const updateCartList = () => {
      const cartList = document.getElementById("cartList");
      cartList.innerHTML = "";
  
      carrito.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Quitar";
        removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
        removeButton.addEventListener("click", () => {
          const index = carrito.indexOf(item);
          if (index > -1) {
            carrito.splice(index, 1);
            updateCartList();
            updateCartTotal();
          }
        });
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
      });
    };
  
    const addToCart = (name, price) => {
      carrito.push({ name, price });
      updateCartList();
      updateCartTotal();
    };
  
    const cancelPurchase = () => {
      carrito.length = 0; // Vaciar el carrito
      updateCartList();
      updateCartTotal();
      alert("Su compra fue cancelada y su carrito está vacío.");
    };
  
    const completePurchase = () => {
      alert("Felicitaciones, procederemos al pago.");
    };
  
    const addToCartButtons = document.querySelectorAll(".btn-primary");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const card = button.closest(".card");
        const itemName = card.querySelector(".card-title").textContent;
        const itemPrice = parseFloat(card.querySelector(".card-text").textContent.replace("$", ""));
        addToCart(itemName, itemPrice);
      });
    });
  
    const cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", () => {
      cancelPurchase();
    });
  
    const payButton = document.getElementById("payButton");
    payButton.addEventListener("click", () => {
      completePurchase();
    });
  });
  