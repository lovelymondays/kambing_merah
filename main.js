/* --------------------------- Meeting 9 | CLick and Change Mini Text ------------------------- */
function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll down";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";

  var iconUp = document.getElementsByClassName("icon-up")[0];

  iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
  };
}

/* --------------------------- Meeting 11 | Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black";
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "white";
  }

  this.classList.toggle("red");
}
/* --------------------------- Meeting 12 | Change Jumbotron Image ------------------------- */
function changeImage(element) {
  element.setAttribute("src", "/Projects/assets/cat.jpg");
  // element.setAttribute("height", "300")
  // element.setAttribute("class", "jumbotron-img")
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://i0.wp.com/timedoor.net/wp-content/uploads/2021/02/why-us-2-min.jpg?fit=597%2C372&ssl=1"
  );
  // element.setAttribute("height", "300")
}

/* --------------------------- Challenge of Meeting 12 | Change Jumbotron Title ------------------------- */
function changeTitle(element) {
  element.innerHTML = "Create Simple Game and Website";
  elememnt.setAttribute("color", "black");
}

function changeTitleBack(element) {
  element.innerHTML = "Get Programming Tips Here!";
}
