function formatCardNumber(inputId, outputId) {
    const outputElement = document.getElementById(outputId);
    const inputElement = document.getElementById(inputId);
 
    let value = inputElement.value.replace(/\s/g, '');
    outputElement.textContent = '';
    // let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        // formattedValue += ' ';
        outputElement.textContent += ' ';
      }
      // formattedValue += value[i];
      outputElement.textContent += value[i];
    }

    inputElement.value = formattedValue;
  }

  function updateLive(inputId, outputId) {
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(outputId);
    outputElement.textContent = inputElement.value;
  }
  
  function validateInput(input) {
    input.setCustomValidity('');

    if (!input.validity.valid) {
      input.setCustomValidity(input.title);
    }
  }

const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
})
  