let btn = document.querySelectorAll("button");
// console.log(btn);

// console.log(btn[0]);

for (let i = 0; i < btn.length; i++) btn[i].addEventListener("click", check);

let btnNum = 0;

function check(e) {
  //   e.target.innerText;
  //   console.log(e.target.innerText);
  btnNum = e.target.innerText;
  console.log(btnNum);

  //   console.log(typeof e.target.innerText);
}

let obj = {
  1: "dices/dice_1.png",
  2: "dices/dice_2.png",
  3: "dices/dice_3.png",
  4: "dices/dice_4.png",
  5: "dices/dice_5.png",
  6: "dices/dice_6.png",
};

let dices = document.querySelector("img");
console.log(dices);

dices.addEventListener("click", RandomNo);

let score = 0;

function RandomNo(e) {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(e.target);

  console.log(randomNumber);
  dices.src = obj[randomNumber];

  if (randomNumber == btnNum) {
    score = score + 5;
    p.innerText = score;
  } else if (randomNumber != btnNum) {
    score = score - 5;
    p.innerText = score;
  }
}

let p = document.querySelector("p");
