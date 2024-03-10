const buttons = document.querySelectorAll('.buttons button');
const deleteBtn = document.querySelector('.buttons .delete');
const clearValue = document.querySelector('.buttons .clear');
const display = document.getElementById('display');

// Add event listener to handle button clicks
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // a switch statement for the  different button functionalities
    switch (buttonText) {
      case '=':
        calculateResult();
        break;
      case 'AC':
        clearAll();
        break;
      case 'DEL':
        deleteDisplayedText();
        break;
      default:
        addToDisplay(buttonText);
        break;
    }
  });
});

// Function to add clicked button text to the display
function addToDisplay(text) {
  display.textContent += text;
  display.classList.add('display-text');
}

// Function to clear text of the display
function clearAll() {
  display.textContent = '';
}

// Function to delete text from the display
function deleteDisplayedText() {
  display.textContent = display.textContent.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
  let expression = display.textContent;

  try {
    // Evaluate the expression using JavaScript's eval function
    let result = eval(expression);

    // Display the result
    display.textContent = result;
  } catch (error) {
    // Handle error if expression is invalid
    display.textContent = 'Error';
  }
}
