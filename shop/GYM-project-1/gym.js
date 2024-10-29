document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    swal({
        title:"Your order is reserved",
        text: "Your bill will be sent to your email",
        icon: "success",
        className:"sweet",
    })
    this.reset(); 
});

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
};
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        786: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Add Cart code
const cart = [];
const cartDiv = document.getElementsByClassName('cart-menu');
const totalPriceDiv = document.querySelector('.products span');
const sidebar = document.getElementById('sidebar');
const button = document.getElementById('toggleButton');
const closeicon = document.getElementById('closeicon');
button.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    document.querySelector('.home').classList.toggle('shifted');
});
closeicon.addEventListener('click', () => {
    sidebar.classList.add('hidden');
});

document.getElementsByClassName('btn').addEventListener('click', () => {
    const productName = document.getElementById('product').value;
    const productPrice = parseFloat(document.querySelector('.products span').value);

    if (productName && !isNaN(productPrice) && productPrice > 0) {
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
        clearInputs();
    } else {
        alert("Please enter a valid product name and price.");
    }
});

function updateCart() {
    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)} × ${item.quantity}</span>
            <span>
                <a href="#" onclick="removeProduct(${index})">Remove</a>
            </span> `        ;
        cartDiv.appendChild(itemDiv);
    });

    totalPriceDiv.textContent = `Total: $${total.toFixed(2)}`;
}

function removeProduct(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearInputs() {
    document.getElementById('product').value = '';
    document.querySelector('.products span').value = '';
}

// document.addEventListener('DOMContentLoaded', () => {
//     const addTocartbtn = document.querySelectorAll('.btn');
//     const cartItemcount = document.querySelector('.fa-shopping-cart span');
//     const cartItemlist = document.querySelector('.cart-test');
//     const cartTotal = document.querySelector('.cart-total');
//     const cartIcon = document.querySelector('.fa-shopping-cart span');
//     const slider = document.getElementById('sidebar');

//     let cartItems = [];
//     let totalAmount = 0;
//     addTocartbtn.forEach((a, index) => {
//         a.addEventListener('click', () => {
//             const item = {
//                 name: document.querySelectorAll('.box')[index].textContent,
//                 price: parseFloat(
//                     document.querySelectorAll('.price')[index].textContent.slice(1),
//                 ),
//                 quantity:1,
//             };

//             const exisitingItem=cartItems.find(
//                (cartItem)=> cartItem.name===item.name,
//             );
//             if(exisitingItem){
//                 exisitingItem.quantity++;
//             }
//             else
//             {
//                 cartItems.push(item);
//             }

//             totalAmount+=item.price;

//             updateCartUI();
//         });
//         function updateCartUI(){
//             updateCartItemCount(cartItems.length);
//             updateCartItemList();
//             updateCartTotal();
//         }

//         function updateCartItemCount(){
//             cartItemcount.textContent=count;
//         }

//         function updateCartItemList(){
//             cartItemlist.innerHTML='';
//             cartItems.forEach((item,index)=>{
//                  const cartItem=document.createElement('div');
//                  cartItem.classList.add('cart-item','individual-cart-item');
//                  cartItem.innerHTML=`
//                  <span>(${item.quantity}x)${item.name}</span>
//                  <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2,)}
//                  <button class="remove-btn" data-index="${index}"><i class="fa-solid .fa-times"</i></button>
//                  </span>
//                  `;

//                  cartItemlist.append(cartItem);
//             });

//             const removeButtons =document.querySelectorAll('.remove-item');
//             removeButtons.forEach((button)=> {
//                 button.addEventListener('click',(event)=>{
//                     const index=event.target.dataset.index;
//                     removeItemFormCart(index);
//                 });
//             });
//         }
       
//         function removeItemFormCart(index){
//             const removeItem = cartItem.splice(index, 1)[0];
//             totalAmount -=removeItem.price * removeItem.quantity;
//             updateCartUI;
//         }

//         function updateCartTotal(){
//             cartTotal.textContent =`$${totalAmount.toFixed(2)}`;
//         }

//         cartIcon.addEventListener('click', ()=>{
//             sidebar.classList.toggle('open');
//         });

//         const closeButton = document.querySelector('.sidebar-close');
//         closeButton.addEventListener('click', ()=>{
//             sidebar.classList.remove('open');
//         });
//     });
// });







