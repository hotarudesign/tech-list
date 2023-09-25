"use strict";

// サークルアニメーション
const shape = document.querySelector(".circle__line");
let angle = 0;
function drawCircle() {
  //角度が365°未満のとき
  if (angle < 360) {
    //角度を2°ずつ増やす
    angle += 1.2;
    //角度をconic-gradientの角度に代入
    shape.style.backgroundImage = `conic-gradient(#609ff8 ${angle}deg, transparent ${angle}deg)`;
    //requestAnimationFrameを再度呼び出す
    requestAnimationFrame(drawCircle);
  }
}
requestAnimationFrame(drawCircle);

document.addEventListener("DOMContentLoaded", function () {
  //要素の表示、円周上に表示させる
  let circle = document.querySelectorAll(".jsCircleItem");
  //HTMLから取得
  let line = document.querySelector(".circle__line");
  /*円形に並べる手順*/
  let item_length = circle.length;
  //rouletteの半径を計算
  let r = line.clientWidth / 2;
  //360度÷配置要素数
  let deg = 360.0 / item_length;
  //さっきの角度をラジアンに変更
  let rad = (deg * Math.PI) / 180.0;
  let radians90 = (180 * Math.PI) / 180.0;
  //要素追加して表示させる
  for (let i = 0; i < circle.length; i++) {
    //div要素の追加
    const x = Math.cos(rad * i - radians90) * r + r;
    const y = Math.sin(rad * i - radians90) * r + r;
    circle[i].style.left = x + "px";
    circle[i].style.top = y + "px";
  }
});
gsap.from(".jsCircleItem", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.6,
  scale: 1.1,
});
