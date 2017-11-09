window.onload = function() {
  var table = document.querySelector('.tictactoe');

  table.addEventListener('click', addX);
};

var centinel = true;
function addX(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel)
      event.target.textContent = 'X';
    else
      event.target.textContent = 'O';
    centinel =! centinel;
  }
};
