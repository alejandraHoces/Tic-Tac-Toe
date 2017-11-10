var tictactoe = document.querySelector('.tictactoe-js');
var centinel = true;
var count = 0;
var podium = false;
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');

window.onload = function() {
  tictactoe.addEventListener('click', addX);
  document.getElementById('b-reset').addEventListener('click', reset);
};

function addX(event) {
  // Colocamos la 'X' u 'O' de acuerdo al turno
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) {
      event.target.textContent = 'X';
      centinel = false;
      count++;
    } else {
      event.target.textContent = 'O';
      centinel = true;
      count++;
    }
  }

  if (count >= 5 && count <= 9) {
    toPlay();
  }

  if (count >= 9 && podium === false) {
    document.getElementById('winner').innerHTML = 'DEAD HEAT';
  }
};

function toPlay() {
  if ((c1.textContent === 'X' && c2.textContent === 'X' && c3.textContent === 'X') ||
 	 (c4.textContent === 'X' && c5.textContent === 'X' && c6.textContent === 'X') ||
 	 (c7.textContent === 'X' && c8.textContent === 'X' && c9.textContent === 'X') ||
 	 (c1.textContent === 'X' && c4.textContent === 'X' && c7.textContent === 'X') ||
      (c2.textContent === 'X' && c5.textContent === 'X' && c8.textContent === 'X') ||
      (c3.textContent === 'X' && c6.textContent === 'X' && c9.textContent === 'X') ||
      (c1.textContent === 'X' && c5.textContent === 'X' && c9.textContent === 'X') ||
      (c3.textContent === 'X' && c5.textContent === 'X' && c7.textContent === 'X')) {
 	 document.getElementById('winner').innerHTML = 'Winner: X ';
 	 count = 10;
    podium = true;
    // Declaramos todas las posibles situaciones en la que ganaria O
  } else if ((c1.textContent === 'O' && c2.textContent === 'O' && c3.textContent === 'O') ||
 	 (c4.textContent === 'O' && c5.textContent === 'O' && c6.textContent === 'O') ||
 	 (c7.textContent === 'O' && c8.textContent === 'O' && c9.textContent === 'O') ||
 	 (c1.textContent === 'O' && c4.textContent === 'O' && c7.textContent === 'O') ||
      (c2.textContent === 'O' && c5.textContent === 'O' && c8.textContent === 'O') ||
      (c3.textContent === 'O' && c6.textContent === 'O' && c9.textContent === 'O') ||
      (c1.textContent === 'O' && c5.textContent === 'O' && c9.textContent === 'O') ||
      (c.textContent3 === 'O' && c5.textContent === 'O' && c7.textContent === 'O')) {
    document.getElementById('winner').innerHTML = 'Winner: O ';
    count = 10;
    podium = true;
  } else {

  }
}


function reset() {
  window.location.reload();
}
