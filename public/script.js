
function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      
      var nameHolder = document.getElementById('nameholder').value;
       var nameHolderr = /^[a-zA-Z0-9]+$/
       
       var nameHolderrr = nameHolderr.test(nameHolder);
       
    /*   alert("phone:"+nameHolderrr );*/
      
      var elems = form.elements;

      resetError(elems.from.parentNode);
      if (!elems.from.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
      } else if (!nameHolderrr) {
        showError(elems.from.parentNode, ' Латиницей, сука!.');
      
      }

     
    }