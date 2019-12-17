setTimeout(function runsomething(){

    function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    };

    var gadget = document.querySelector('.goog-te-gadget-simple');
    var locIcon = document.createElement('div');
    
    locIcon.innerHTML = `<div class="locStore"><a href="https://www.mytee.com/support/find-distributors/"><span class="locator">Find A Distributor</span></a></div>`

    insertAfter(locIcon, gadget);
    },1500); 