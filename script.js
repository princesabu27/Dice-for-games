var imgElements = document.getElementsByTagName("img");

function shuffle() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  imgElements[0].style.animationName = "rotate";
  
  setTimeout(function() {
    imgElements[0].style.animationName = "none";
    imgElements[0].setAttribute("src", `images/${randomNumber}.png`);
  }, 1000); // 2000 milliseconds = 2 seconds
}
