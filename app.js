// Шооны зургыг авж энд хадгална.
var diceDom = document.querySelector(".dice");

// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогч нь 0, 2-р тоглогч нь 1 гэе
var activePlayer, scores, roundScore, diceNumber;

// Тоглоом эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогч нь 0, 2-р тоглогч нь 1 гэе
  activePlayer = 0;
  // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // Тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
  roundScore = 0;
  // Шооны аль талаараа буусаныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
  diceNumber = Math.floor(Math.random() * 6) + 1;
  // document.querySelector("#score-1").innerHTML = "<em>Yes?<em>";

  // Програм эхлэхэд бэлтгэе ээ.
  document.getElementById("score-0").textContent = " 0";
  document.getElementById("score-1").textContent = " 0";
  document.getElementById("current-0").textContent = " 0";
  document.getElementById("current-1").textContent = " 0";

  // Тоглогчдын нэрийг буцааж гаргах ???
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  diceDom.style.display = "none";
}
initGame();

// Шоог шидэх eveny listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургыг web дээр гаргаж ирнэ.
  diceDom.style.display = "block";
  //Буусан тоонд харгалзах шооны зургыг web дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1 - ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн тоог нэмнэ.
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});

// Hold товчны event listener
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогч нь цуглуулсан оноог global оноон дээр нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Дэлгэц дээрх оноог өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Уг тоглогч хожсон (оноо нь 100 хүрсэн) - эсэхийг шалгах
  if (scores[activePlayer] >= 20) {
    // Ялсан тоглогчийн нэрийг Winner! болгож өөрчлөх
    document.getElementById("name-" + activePlayer).textContent = "WINNER!";
    document
      .querySelector("name-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector("name-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчийн ээлжийг сольно.
    switchToNextPlayer();
  }
});

// Энэ функц нь тоглох ээлжээ дараачийн тоглогч руу шилжүүлнэ.
function switchToNextPlayer() {
  // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  // Хэрвээ идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго.
  // Хэрвээ идэвхитэй тоглогч нь 1 байвал идэвхитэй тоглогчийг 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // if (activePlayer === 0) {
  //   activePlayer = 1;
  // } else activePlayer = 0;

  // Идэвхитэй эсэрийг зааж буй дугуй дүрсийг шилжүүлнэ.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}
// Шинэ тоглоом эхлүүлэх event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
