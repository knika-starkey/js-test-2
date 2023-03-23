function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
let colors = [
  "coral",
  "orange",
  "gold",
  "greenyellow",
  "lightblue",
  "plum",
  "violet",
];
let phrase = "1, 2, 3, 4, 5";
let wordsArr = shuffle(phrase.split(", "));
document.write(`<div class="col l12 s12 center colCustom colC" id="c3">
  <div class="container">`);
for (let i = 0; i < wordsArr.length; i++) {
  document.write(
    `<div id="drag${wordsArr[i]}" class="card" style="background-color:${
      colors[Math.floor(Math.random() * colors.length)]
    }" draggable="true" ondragstart="drag(event)">${wordsArr[i]}</div>`
  );
}
document.write(`</div></div>`);
let dropField = document.getElementById("word");
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.innerHTML);
}

function drop(event) {
  event.preventDefault();

  let data = event.dataTransfer.getData("text");
  console.log(data);
  dropField.appendChild(document.getElementById(`drag${data}`));
}
let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

function check(event) {
  let str = dropField.innerText.trim();
  // console.log(str);
  alert(str == phrase.replaceAll(", ", "") ? "ОК" : "Помилка");
  if (str == phrase.replaceAll(", ", "")) {
    let numbers = dropField.getElementsByClassName("card");
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.add("right");
    }
  }
}

let cleanButton = document.getElementById("clean");
cleanButton.addEventListener("click", clean);
function clean() {
  let divWord = document.getElementsByClassName("card");
  dropField.innerText = "";
  for (let i = 0; i < divWord.length; i++) {
    divWord[i].style.opacity = "1.0";
  }
}
