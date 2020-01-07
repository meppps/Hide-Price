
// HIDE REFURB v2

// Hide in menus  
function hideSearchRef(){
    // Loop through nodelist, check for refurbished products
    var pTitles = document.querySelectorAll('h2.woocommerce-loop-product__title');
    pTitles.forEach((pTitle) => {
        // If product is refurbished 
        if(pTitle.textContent.includes('REFURBISHED')){
            // Store Price
            var pPrice = pTitle.nextElementSibling;
            const actualPrice = pPrice.innerText;
            console.log(`%c ${actualPrice}`,`color: yellow`);

            // Check button type / add visibility function
            var atcButton = pPrice.parentElement.nextElementSibling;
            // Only add display function to cart buttons
            if(atcButton.textContent.includes('cart')){

                atcButton.addEventListener('click',() =>{
                pPrice.innerText = actualPrice;
                });
            }
            // Hide price 
            pPrice.innerText = 'Add to Cart to See Price';
        }
    })
};


// Hide on product page 
function hideProdRef(){
    // Store price
    const productPrice = document.querySelector('p.price').innerText;
    var message = document.querySelector('div.woocommerce-message');
    var priceEl = document.querySelector('p.price');
    var cartBtn = document.querySelector('.single_add_to_cart_button.button.alt');

    // Prevent re-running
    if(message == null){
        // Hide price
        priceEl.innerHTML = '<h2>Add to Cart to See Price</h2>';
        
        // Add to cart button functionality
        cartBtn.addEventListener('click', () => {
            // Show price
            priceEl.innerText = productPrice;
        });
    }else if(message != null){
        console.log('%c Already in Cart','color: pink');
    }
};

// Page specific elements
var pageTitle = document.querySelector('h1.page-title');
var breadcrumb = document.querySelector('.woocommerce-breadcrumb'); 

// Check if product is refurbished
function checkProdRef(){
    // Hides refurb on product page
        if(breadcrumb.textContent.includes('Refurbished')){
            hideProdRef();
            console.log('%c Refurbished Product','color: #00ffff')
        }
};

// Check page type
function checkPageType(){
    // Run on menus
    if(pageTitle != null){
        hideSearchRef();
        console.log('%c Menu Page','color: #ff00ff')
    };

    // Run on product pages
    if(breadcrumb != null){
        console.log('%c Product Page','color: #ff8000')
        checkProdRef();
    };
};

checkPageType();