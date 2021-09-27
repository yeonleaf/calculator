let calContainer = document.querySelector("#Cal");
let calCash = calContainer.querySelector(".calBtnCash");
let calCard = calContainer.querySelector(".calBtnCard");
let cash = document.querySelector(".cash");
let card = document.querySelector(".card");



// 클릭했을때
function clickedCash() {
  cash.classList.add("cashClicked");
}

function clickedCard() {
  card.classList.add("cardClicked");
  self.setTimeout("hideOnCard()", 5000);     // 5초후 자동으로 사라지게 만드는 함수
  self.setTimeout("allOfOff()", 6000);
}

// insert your card 떴다가 자동으로 사라지는 함수
function hideOnCard() {
    document.querySelector(".cardClicked").classList.add("off");
}

function allOfOff() {
  document.querySelector(".card").classList.remove("cardClicked");
  document.querySelector(".card").classList.remove("off")
}

// 사용할 함수 넣기
function inIt() {
 
calCash.addEventListener("click", clickedCash);        // Cash클릭했을 때 뜨게 만드는 함수
calCard.addEventListener("click", clickedCard);        // Card클릭했을 때 뜨게 만드는 함수

};

inIt();