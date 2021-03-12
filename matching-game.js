window.addEventListener("load", generateFaces);
let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
let numTries = 0;
let goodTries = 0;
let moreFaces = 5;
moreFaces = prompt(
  "Welcome to the Matching Game!\nPlease enter your level 😃\n(If you'd like to play the standard game just press enter)\nEasy, Medium, or Difficult:"
).toLowerCase();

function generateFaces() {
  for (let i = 0; i < numberOfFaces; i++) {
    let face = document.createElement("img");
    face.src = "images/smile.png";
    let randomTop = Math.floor(Math.random() * 400) + 1;
    let randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  }
  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
  theLeftSide.lastChild.addEventListener("click", nextLevel);
  document.body.addEventListener("click", gameOver);
  numTries += 1;
}

function nextLevel() {
  goodTries += 1;
  event.stopPropagation();
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.lastChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.lastChild);
  }
  manyFaces(moreFaces);
  generateFaces();
}

function manyFaces(moreFaces) {
  if (moreFaces === "easy") {
    return (numberOfFaces += 3);
  } else if (moreFaces === "medium") {
    return (numberOfFaces += 5);
  } else if (moreFaces === "difficult") {
    return (numberOfFaces += 7);
  } else {
    return (numberOfFaces += 5);
  }
}

function gameOver() {
  alert(
    `GAME OVER:\nYou have tried your luck ${numTries} times and reached level ${goodTries}\nTry again!`
  );
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
  document.body.removeEventListener("click", gameOver);
  let button = document.getElementById("buttonAppear");
  button.style.visibility = "visible";
}
function restartGame() {
  window.location.reload();
}
