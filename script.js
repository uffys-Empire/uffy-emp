// script.js

const products = [
    {
        id: 1, name: "louis viutton dark blue theme full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/louis viutton dark blue theme.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },

    {
        id: 2, name: "Louis vuitton coffeee theme full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Louis vuitton coffeee theme.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },

    {
        id: 3, name: "White Countour full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/White Countour.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },

    {
        id: 4, name: "white sketch fullset duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/white sketch.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },

    {
        id: 5, name: "White underlay with multicolor design full set Luxury duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/White underlay with multicolor design.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },

    {
        id: 6, name: "White-flowery full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/White-flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },

    {
        id: 7, name: "Brown-comouflage full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/ash underlay.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },

    {
        id: 8, name: "black hd print full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/black hd print.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },

    {
        id: 9, name: "Black underlay",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Black underlay.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },

    {
        id: 10, name: "blue and gold fullset duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/blue and gold stamp.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },

    {
        id: 11, name: "bold brown theme full set Luxury duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/bold brown theme.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },

    {
        id: 12, name: "White-flowery full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/White-flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },

    {
        id: 13, name: "Brown-comouflage full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/brown comouflage full set duvet.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },

    {
        id: 14, name: "brown contour full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/brown contour.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },

    {
        id: 15, name: "Brown-dotted full set duvet full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Brown-dotted full set duvet.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },

    {
        id: 16, name: "coffee underlay",
        price: 27000, displayPrice: "₦27,000",
        img: "images/coffee underlay.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },

    {
        id: 17, name: "Dark theme full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },

    {
        id: 18, name: "Dark-blue flowery full set duvet full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Dark-blue flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },

    {
        id: 19, name: "gold and ash hd print full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/gold and ash hd print.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },

    {
        id: 20, name: "Dark theme full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },

    {
        id: 21, name: "gold feathers",
        price: 27000, displayPrice: "₦27,000",
        img: "images/gold feathers.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },

    {
        id: 22, name: "green check fullset duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/green check.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },

    {
        id: 23, name: "green flowery full set Luxury duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Green Flowery fullset duvet.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },

    {
        id: 24, name: "horizontal lines",
        price: 27000, displayPrice: "₦27,000",
        img: "images/horizontal lines.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },

    {
        id: 25, name: "Brown-comouflage full set duvet",
        price: 85000, displayPrice: "₦85,000",
        img: "images/brown comouflage full set duvet.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },

    {
        id: 26, name: "milk and blue roses full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },

    {
        id: 27, name: "multicolored broken sticks full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/multicolored broken sticks.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },

    {
        id: 28, name: "pink and white roses fullset duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/pink and white roses.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },

    {
        id: 29, name: "pink underlay full set Luxury duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/pink underlay.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },

    {
        id: 30, name: "Purple countour full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Purple countour.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },
    {
        id: 31, name: "red  check full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/red  check.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },

    {
        id: 32, name: "red hd print full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/red hd print.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },

    {
        id: 33, name: "red roses on white full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/red roses on white.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },

    {
        id: 34, name: "Sky blue tree branches fullset duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/Sky blue tree branches.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },

    {
        id: 35, name: "triangular check full set Luxury duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/triangular check.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 36, name: "Yellow underlay full set duvet",
        price: 27000, displayPrice: "₦27,000",
        img: "images/ellow underlay.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
];
// Populate products
const productsGrid = document.getElementById('products-grid');

if (productsGrid) {
    productsGrid.innerHTML = ''; // clear first to avoid duplicates on reload

    // Decide how many to show based on which page we're on
    let productsToShow;

    if (document.querySelector('.hero')) {
        // We're on the homepage (has hero section) → show only first 6
        productsToShow = products.slice(0, 6);
    } else {
        // We're on shop.html (no hero) → show all
        productsToShow = products;
    }

    productsToShow.forEach(product => {
        const cardHTML = `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <div class="price">${product.displayPrice}</div>
                    <button class="buy-btn" data-id="${product.id}">Buy Now</button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += cardHTML;
    });
}// Modal elements
const modal = document.getElementById('buy-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.getElementById('confirm-payment');

let currentProduct = null;
let selectedQuantity = 1;
let deliveryOption = "pickup";  // default

// Quantity elements
const qtyDisplay = document.getElementById('qty-display');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');

// Update displayed total price
function updateTotalPrice() {
    if (!currentProduct || !modalPrice) return;
    const total = currentProduct.price * selectedQuantity;
    modalPrice.textContent = `₦${total.toLocaleString('en-NG')}`;
}
// Quantity controls
if (qtyMinus && qtyPlus && qtyDisplay) {
    function updateQuantityButtons() {
        qtyMinus.disabled = selectedQuantity <= 1;
        qtyPlus.disabled = selectedQuantity >= 10;
        qtyPlus.classList.toggle('disabled', selectedQuantity >= 10);
    }

    qtyMinus.addEventListener('click', () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            qtyDisplay.textContent = selectedQuantity;
            updateTotalPrice();
            updateQuantityButtons();
        }
    });

    qtyPlus.addEventListener('click', () => {
        if (selectedQuantity < 10) {
            selectedQuantity++;
            qtyDisplay.textContent = selectedQuantity;
            updateTotalPrice();
            updateQuantityButtons();
        }
    });

    // Run once when modal opens (add this inside your buy-btn click handler)
    // after selectedQuantity = 1;
    updateQuantityButtons();
}

// Delivery option listener
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
deliveryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        deliveryOption = e.target.value;

        // Optional: Show alert only the first time someone selects home delivery
        if (deliveryOption === "delivery" && !sessionStorage.getItem('deliveryAlertShown')) {
            alert("Home delivery incurs additional charges based on your location.\nExact fee will be confirmed via WhatsApp after order submission.");
            sessionStorage.setItem('deliveryAlertShown', 'true');
        }
    });
});







// Open modal
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('buy-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        currentProduct = products.find(p => p.id === productId);

        if (currentProduct) {
            // Reset & initialize
            selectedQuantity = 1;
            // Reset delivery to default
            deliveryOption = "pickup";
            document.querySelector('input[name="delivery"][value="pickup"]').checked = true;
            if (qtyDisplay) qtyDisplay.textContent = 1;
            updateQuantityButtons();
            modalImg.src = currentProduct.img;
            modalName.textContent = currentProduct.name;
            updateTotalPrice();                     // shows correct initial total
            // Reset & initialize

            // ← add this line

            modal.style.display = 'flex';

            // Optional: clear previous customer inputs
            const nameInput = document.getElementById('customer-name');
            const waInput = document.getElementById('customer-whatsapp');
            if (nameInput) nameInput.value = '';
            if (waInput) waInput.value = '';
        }
    }
});

// Close modal
function closeModal() {
    if (modal) modal.style.display = 'none';
}

closeBtn?.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.style.display === 'flex') {
        closeModal();
    }
});

// Confirm → Send to WhatsApp
confirmBtn?.addEventListener('click', () => {
    if (!currentProduct) return;

    const nameInput = document.getElementById('customer-name');
    const waInput = document.getElementById('customer-whatsapp');

    const customerName = nameInput?.value.trim();
    const waNumberRaw = waInput?.value.trim();
    const waNumber = waNumberRaw ? waNumberRaw.replace(/\D/g, '') : '';

    if (!customerName) {
        alert("Please enter your full name.");
        return;
    }

    if (!waNumber || waNumber.length < 10) {
        alert("Please enter a valid WhatsApp number.\nExample: 2348012345678 (no spaces, no +)");
        return;
    }

    const totalAmount = currentProduct.price * selectedQuantity;
    const formattedTotal = `₦${totalAmount.toLocaleString('en-NG')}`;

    // ← Update these with YOUR real details
    const yourWhatsAppNumber = "2348160330260";   // ← CHANGE THIS
    const bankDetails =
        `Bank: GTBank\n` +
        `Account Name: Uffy's Empire\n` +
        `Account Number: 0562663931\n` +
        `(Please transfer exactly ${formattedTotal})`;

    const message =
        `Hello Uffy's Empire! 

I'd like to place an order:

Product: ${currentProduct.name}
Quantity: ${selectedQuantity}
Total amount: ${formattedTotal}

My name: ${customerName}
WhatsApp: +${waNumber}

Delivery preference: ${deliveryOption === "pickup" ? "Pick-up at store (free)" : "Home Delivery (extra charges apply)"}

Bank transfer details:
${bankDetails}

I'll send the payment proof (screenshot) immediately after transfer.
Please confirm when received. Thank you! 🙏`;
    const encodedMsg = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMsg}`;

    // Open WhatsApp
    window.open(whatsappLink, '_blank');

    // Feedback on website
    alert(`Thank you ${customerName}! Your order details have been sent to our WhatsApp.\n\nPlease make the transfer and send the proof in the chat. We'll reply very soon.`);

    // Clean up
    closeModal();
    if (nameInput) nameInput.value = '';
    if (waInput) waInput.value = '';
    selectedQuantity = 1;
    if (qtyDisplay) qtyDisplay.textContent = 1;
    updateTotalPrice();
});

// Hamburger menu (unchanged)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');

    const spans = hamburger?.querySelectorAll('span');
    if (spans?.length === 3) {
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        const spans = hamburger?.querySelectorAll('span');
        if (spans?.length === 3) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});
