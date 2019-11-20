function variationCorrection(){

    // Init

    const finPrice = document.querySelector('div.ls-detail-button-cont').innerText
    var selectors = document.querySelectorAll('select'); 
    let selectorCount = selectors.length

    document.querySelector('p.price').height = '115px'
    

    // Loop through selectors and add event listeners for selector change
    
    selectors.forEach((selectors) =>{      
        function selectorEvents(){
            selectors.addEventListener('change', () => {

                // Delay append so plugin doesn't wipe it out immediately -- Timeout = 300ms
                setTimeout(function appendButton(){

                    // Create Button Element
                    const div = document.createElement('div');
                  
                    div.className = 'ls-detail-button-cont';
                
                    div.innerHTML = `
                    <div class="ls-detail-button-cont qsacont" style="undefined">
                    <a target="_blank" class="lsb_container no-select" rel="nofollow" pname="80-120%20Prep%20Center%20S%E2%84%A2%20w%2F%20Heat%20(Qty%20of%201)" pprice="2699.00" psku="" href="https://secure.quickspark.com/app.cfm?utm_source=q8dhd4q&amp;utm_medium=ls-detail-button&amp;utm_term=btn_310/btn_310_green_flat&amp;utm_campaign=application&amp;utm_content=app&amp;do=apply&amp;btn=design_btn_310&amp;vurl=q8dhd4q&amp;wsc=&amp;loc=&amp;vButton=ipd&amp;cost=2699.00&amp;ProductId=&amp;ProductName=80-120%20Prep%20Center%20S%E2%84%A2%20w%2F%20Heat%20(Qty%20of%201)"> 
                        <div class="LeaseStationButton btn_310 ls-detail-button" style="background: url(https://vendor1.quickspark.com/images/button/btn_310/btn_310_green_flat.svg) no-repeat; margin:10px 0px 0px 0px; display:inline-block;">
                            <div style="font-weight:700;">${finPrice}</div>
                        </div>
                    </a>
                    </div>  
                    `;
                    
                    // Append to price div
                    document.querySelector('p.price').appendChild(div);
                  },300);
                
                  console.log('Button Re-appended');
        });
        };
    
        // Call declaration function
        selectorEvents();
    });

    };
    
    // Check if // only run on variation page
    setTimeout(function checkpage(){
        var requirement = document.querySelector('#voltage-requirements');
        if(requirement != null){
            variationCorrection();
            console.log('This is a variation page');
        }else{
            console.log('This is not a variation page');
        }
    }, 3000);

    
    // setTimeout(function(){ alert("Hello"); }, 3000);
    // Have a nice day :)