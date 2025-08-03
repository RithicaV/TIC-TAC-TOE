let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rest");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".message");
let msg = document.querySelector("#msg");

let turno = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
const restgame = () => {
  turno = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno) {
      box.innerText = "o";
      turno = false;
    } else {
      box.innerText = "x";
      turno = true;
    }
    box.disabled = true; //inorder to avoid repetation ->keep on changing
    checkwinner();
  });
});
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = `🎉 Congrats! The Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};
const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showwinner(pos1);
      }
    }
  }
};
newbtn.addEventListener("click", restgame);
resetbtn.addEventListener("click", restgame);
