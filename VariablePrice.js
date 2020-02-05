// Hidden Variable Pricing V3
// Compensate for page errors and old browsers 

// Await page load
window.addEventListener('load', function varPriceRanges(){
    
    // Define page elements
    var priceDiv = document.querySelector('p.price')
    var variableProduct = priceDiv.innerText.includes(" – ") && priceDiv.childNodes[1].nodeType == 3

    // Check if variable product
    if(variableProduct === false){
        console.log('%c NOT VARIABLE PRODUCT','color: RED')
        // throw new Error("Intentional error -- Not a variable product");
        return
        
        }else if(variableProduct === true){
        console.log('%c Variable Product','color: pink')

        //Remove price range / Store in array to reuse in case of display error
        var i = 1
        var priceRange = []
        while(i < 4){
            priceRange.push(priceDiv.childNodes[0])
            priceDiv.removeChild(priceDiv.childNodes[0])
            i++
        }

        // Error handling
        try{

            // Grab original price , Create new price element // Define variables
            var newPrice = document.createElement('span')
            var actualDiv = document.querySelector('.woocommerce-variation-price')
            newPrice.classList.add('woocommerce-Price-amount','amount')
            var originalPrice = document.querySelector('.woocommerce-variation-price').textContent.split('\n')[0]

            // Insert From: initial price
            function insertText(){
                var actuaPrice = document.querySelector('.woocommerce-variation-price').textContent.split('\n')[0]
                newPrice.innerHTML = `From: ${actuaPrice}` // <--------- ADD INTENTIONAL ERROR TYPO TO TRIGGER CATCH STATEMENT
                priceDiv.insertAdjacentElement('afterbegin',newPrice);
                 }
            insertText();
                 
            }catch(e){
                // If error, prevent page from displaying no price 
                console.log('%c Error Caught','color: yellow')
                console.log(e.message)
                // Prevent duplicates // Put back price range
                if(priceDiv.innerText.includes(" – ") == false){
                    var i = 0
                    while(i<3){
                        priceDiv.prepend(priceRange[i])
                        i++
                    }
                    // Make other price visible
                    document.querySelector('.woocommerce-variation').style.cssText = "opacity:100;max-height:170px !important;"
                    // Kill program
                    throw new Error('Throw a wrench in it')
                }
                console.log('%c Error Caught, Still Running','color: orange')
            }

        // Try,Catch block for selectors 
        try{
            var voltageReq = document.querySelector('#voltage-requirements')
            }catch{
            console.log('%c No Voltage','color: yellow')
            }
            try{
            var tool = document.querySelector('#upholstery-tool')
            }catch{
            console.log('%c No Tool','color: yellow')
            }


        // Update price function
        function updatePrice(){

            // Wait for new price to come in // Update price
            setTimeout(function update(){
                // Update to current selection
                var updatedPrice = document.querySelector('.woocommerce-variation-price').innerText.split('\n')[0]
                newPrice.innerText = updatedPrice

                // From original price when selection isn't made
                if(voltageReq){
                if(voltageReq.selectedIndex == 0){
                    newPrice.innerText = `From: ${originalPrice}`
                }}

                if(tool){
                if(tool.selectedIndex == 0){
                    newPrice.innerText = `From: ${originalPrice}`
                }}


            },250)

        }

        // Check for selectors and add event listeners
        if(voltageReq != null){
        voltageReq.addEventListener('change',() =>{
            updatePrice();
        })};
        

        if(tool != null){
        tool.addEventListener('change',() =>{
            updatePrice();
        })};

        }
});

