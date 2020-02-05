
// HIDE REFURB V3 (SHOP PAGES) // Err Handling
try{
    var pageTitle = document.querySelector('h1.page-title');
}finally{


    // Hide in menus  
    function hideRefurbPrices(){
        const shopPage = pageTitle != null;
        if(shopPage != true){
            return
        }else if(shopPage == true){
            if(pageTitle.innerText != 'Refurbished Equipment'){
                return
            }else if(pageTitle.innerText == 'Refurbished Equipment'){

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
            }
        };
        
    }
    hideRefurbPrices()
}
