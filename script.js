// fonctionnalité 1:
/*
var foot = document.querySelector("footer")
console.log(foot)
var onFootClick = function () {
  console.log("clique")
}
foot.addEventListener('click', onFootClick);
*/
//fonctionnalité 1-bis:
var foot = document.querySelector("footer")
let count = 1
var onFootClick = function () {
  console.log(`clique n°${count}`);
  count++
}
foot.addEventListener('click', onFootClick);

//fonctionnalité 2:
var dropEl = document.querySelector('.navbar-toggler');
var navBar = document.getElementById('navbarHeader');
var dropDwn = function () {
  navBar.classList.toggle('collapse');
};
dropEl.addEventListener('click', dropDwn);

//fonctionnalité 3:
var btnEl = document.querySelector(".btn-outline-secondary");

var inRed = function() {
  var cardText = document.querySelector(".card-text");
  cardText.style.color = "red";
};
btnEl.addEventListener('click', inRed);

//fonctionnalité 4:

var btn2El = document.querySelectorAll(".btn-outline-secondary")[1];
var color2 = false;

var changeColor2 = function(){
  var cardText2 = document.querySelectorAll(".card-text")[1];
  if(color2 === false) {
    cardText2.style.color = "green";
    color2 = true;
  } else {
    cardText2.style.color = "black";
    color2 = false
  };
};
btn2El.addEventListener('click', changeColor2);

//fonctionnalité 5:

var navBar2 = document.getElementsByClassName('navbar')[0];
var link = document.getElementsByTagName('link')[0];
var navBarHidden = false
var deleteBootstrap = function(){
  if (navBarHidden === false)  {
    link.removeAttribute("href"); 
    navBarHidden = true;
  } else {
  link.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  navBarHidden = false
  }
}
navBar2.addEventListener("dblclick", deleteBootstrap);

//fonctionnalité 6:
var btnView = document.querySelectorAll(".btn-success");
var cardText = document.querySelectorAll(".card-text");
var cardImg = document.querySelectorAll(".card-img-top");

for (let index = 0; index <= btnView.length - 1; index++){
  let cardView = false;
  let textToRemove = cardText[index].innerHTML
  var reduceCard = function() {
    if (cardView === false) {
      cardImg[index].style.width = "20%";
      cardText[index].innerHTML = "";
      cardView = true;
    } else {
      cardImg[index].style.width = "100%";
      cardText[index].innerHTML = textToRemove;
      cardView = false
    }
  }
  btnView[index].addEventListener('mouseover', reduceCard)
}

//fonctionnalité 7:
var btnNext = document.querySelector(".btn-secondary");
var row = document.querySelectorAll(".row")[1];

var moveup = function (){
  let lastCol = row.lastElementChild;
  lastCol.remove();
  row.insertBefore(lastCol, row.firstElementChild);
}
btnNext.addEventListener("click", moveup);

//fonctionnalité 8:
var btnPreview = document.querySelector(".btn-primary");

var movedown = function (e){
  e.preventDefault();
  let firstCol = row.firstElementChild
  firstCol.remove();
  row.insertBefore(firstCol, row.lastElementChild.nextSibling);
}

btnPreview.addEventListener("click", movedown);

//fonctionnalité 9:

var logo = document.getElementsByTagName('strong')[0];
var body = document.getElementsByTagName('body')[0];
var selected = function(){
  body.addEventListener("keypress", (e) => {   
    if (e.key === "a") {
      body.removeAttribute('class')
      body.classList.add('d-flex');
      body.classList.add('flex-column');
      body.classList.add('col-4');
    } else if (e.key === "y") {
      body.removeAttribute('class')
      body.classList.add('d-flex');
      body.classList.add('flex-column');
      body.classList.add('col-4');
      body.classList.add('m-auto');
    } else if (e.key == "p") {
      body.removeAttribute('class')
      body.classList.add('d-flex');
      body.classList.add('flex-column');
      body.classList.add('col-4');
      body.classList.add('ml-auto');
    } else if(e.key === "b") {
      body.removeAttribute('class');
    }
  })
};
logo.addEventListener('mouseover', selected);


