// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогч нь 0, 2-р тоглогч нь 1 гэе
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусаныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
// document.querySelector("#score-1").innerHTML = "<em>Yes?<em>";

// Програм эхлэхэд бэлтгэе ээ.
document.getElementById("score-0").textContent = " 0";
document.getElementById("score-1").textContent = " 0";
document.getElementById("current-0").textContent = " 0";
document.getElementById("current-1").textContent = " 0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
