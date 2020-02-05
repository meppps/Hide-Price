
// HIDE REFURB PRICE V3 (PRODUCT PAGES) // Err Handling

try{
    var rp = document.querySelector('.woocommerce-breadcrumb').textContent.includes('Refurbished')
    console.log(`%c Refurbished:`,`color: orange`,`${rp}`)
}catch(e){
    console.log(e.message)
}
finally{
    // Only run if rp = true, for effeciency
    
    function checkProduct(){
        if(rp && rp == false){
            return
        }else if(rp && rp == true){

            try{
                // Hide on product page 
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
            }catch{
                console.log('%c Error Hiding Price','color: red')
            }
        }
    }
    checkProduct()
}


