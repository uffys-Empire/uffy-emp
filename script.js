// script.js
const products = [
    {
        id: 1,
        name: "Brown-comouflage full set duvet",
        price: "₦85,000",
        img: "images/brown comouflage full set duvet.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 2,
        name: "Dark theme full set duvet",
        price: "₦55,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 3,
        name: "Dark-blue flowery full set duvet",
        price: "₦28,000",
        img: "images/Dark-blue flowery full set duvet.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 4,
        name: "Green Flowery fullset duvet",
        price: "₦38,000",
        img: "images/Green Flowery fullset duvet.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 5,
        name: "purple-coumoflage full set Luxury duvet",
        price: "₦125,000",
        img: "images/purple-coumoflage full set Luxury duvet.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 6,
        name: "White-flowery full set duvet",
        price: "₦68,000",
        img: "images/White-flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    }
];

// Populate products
const productsGrid = document.getElementById('products-grid');

products.forEach(product => {
    const cardHTML = `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="price">${product.price}</div>
                <button class="buy-btn" data-id="${product.id}">Buy Now</button>
            </div>
        </div>
    `;
    productsGrid.innerHTML += cardHTML;
});

// Modal functionality
const modal = document.getElementById('buy-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.getElementById('confirm-payment');

let currentProduct = null;

// Open modal when any Buy Now is clicked
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('buy-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        currentProduct = products.find(p => p.id === productId);

        if (currentProduct) {
            modalImg.src = currentProduct.img;
            modalName.textContent = currentProduct.name;
            modalPrice.textContent = currentProduct.price;
            modal.style.display = 'flex';
        }
    }
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

confirmBtn.addEventListener('click', () => {
    alert('Thank you for purchasing ' + currentProduct.name + '!\n\nYour order has been received.We will contact you shortly after confirming your transfer.');
    modal.style.display = 'none';
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Keyboard escape support for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});
