
// Hide price on product pages // Works 

var breadcrumb = document.querySelector('.woocommerce-breadcrumb');

function hideRefurb(){
// Hide price on page load
document.querySelector('p.price').style.visibility = 'hidden';
document.querySelector('button.single_add_to_cart_button').innerHTML = 'ADD TO CART TO SEE PRICE';

// Add to cart button functionality
document.querySelector('.single_add_to_cart_button.button.alt').addEventListener('click', showPrice());

// Display Price Function
function showPrice(){
    document.querySelector('p.price').style.visibility = 'hidden';
    console.log('Added To Cart');
}
};


// Check if products are refurbished
function checkForRefurb(){

    // Hides refurb on product page
        if(breadcrumb.textContent.includes('Refurbished')){
            hideRefurb();
            console.log('This is a refurbished product')
        }else{
            console.log('This is not a refurbished product')
        }

    };


// Only run on product pages
if(breadcrumb != null){
    console.log('This is a product page')
    checkForRefurb();
}else{
    console.log('This is not a product page');
};

// MENU HIDE REFURB // Works

var pageTitle = document.querySelector('h1.page-title');
var price = document.querySelectorAll('span.price');


function hideMenuPrices(){

// var productTitle = document.querySelectorAll('.woocommerce-loop-product__title');


if(pageTitle != null){
    if(pageTitle.textContent.includes('Refurbished Equipment')){
        console.log('Refurbished Detected')
        hideMenuRefurb();
        // document.querySelectorAll('span.price').innerHTML = 'Add to cart to see price';
    }else{
        console.log('No Refurb Detected')
    }
}
};



// Hides refurb on product menu
function hideMenuRefurb(){
if(pageTitle.innerText = 'Refurbished Equipment'){
    price.forEach((price) => {
        price.innerText = 'Add to Cart to See Price'
    })
}else{
    console.log('No Refurb Detected')
}

};

// Only run function on menus
if(pageTitle != null){
    hideMenuPrices();
    console.log('This is a menu')
}else{
    console.log('this is not a menu')
};


