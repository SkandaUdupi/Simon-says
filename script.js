let container = document.querySelector("#container");
let items = document.querySelectorAll(".colors");
let info = document.querySelector("#info");
let HighScore = document.querySelector("p");
let gameSeq = [];
let playerSeq = [];
let btns = ["green", "red", "yellow", "blue"];
let level = 0;
let start = false;
let Score = [];
let max = 0;
//Mobile
let gameOver = document.querySelector("#mobInfo");
let startBtn = document.querySelector("#start");

for (let item of items) {
  item.addEventListener("click", (event) => {
    let clickedtn = event.target;
    flash(clickedtn);
    let color = clickedtn.classList[0];
    playerSeq.push(color);
    checkColor(playerSeq.length - 1);
  });
}
const checkColor = (index) => {
  if (gameSeq[index] === playerSeq[index]) {
    if (gameSeq.length === playerSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    info.innerText = `Game Over!!Your score is ${level} Press any key to Start`;
    gameOver.innerHTML = `Game Over!!Your score is ${level} <br><br>Press start to start the game`;
    maxScore();
    reset();
  }
};

//Starts the game in Pc
document.addEventListener("keypress", () => {
  if (start == false) {
    levelUp();
  }
});

//Starts the game for Mobile

startBtn.addEventListener("click", () => {
  if (start == false) {
    gameOver.innerHTML = "";
    levelUp();
  }
});
const flash = (btn) => {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
};
const btnRandomizer = () => {
  let index = Math.floor(Math.random() * 3);
  let color = btns[index];
  gameSeq.push(color);
  let btn = document.querySelector(`.${color}`);
  return btn;
};
const levelUp = () => {
  playerSeq = [];
  level++;
  info.innerText = `Level ${level}`;
  flash(btnRandomizer());
};
const reset = () => {
  gameSeq = [];
  playerSeq = [];
  start = false;
  level = 0;
};
const maxScore = () => {
  Score.push(level);
  console.log(level);

  if (max <= Score[Score.length - 1]) {
    max = Score[Score.length - 1];
    console.log(Score);
  }
  HighScore.innerText = `Highest Score is ${max}`;
};
//displays game over for mob
