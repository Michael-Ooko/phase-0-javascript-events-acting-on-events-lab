function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });

//   Moving the dodger right


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left + 1}px`;

    const gameWidth = document.getElementById('game').offsetWidth; // Width of the game field
    const dodgerWidth = 40;  // Width of the dodger
    const maxRight = gameWidth - dodgerWidth;
    if (left < maxRight) {
        //     // Move the dodger to the right by increasing its left position
            dodger.style.left = `${left + 1}px`;
          }
}

