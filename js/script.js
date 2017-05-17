var mobileMemory;
var mobileColor;
var mobilePrice;

do {
  var mobileMemory = +prompt("How many memory do You need? Choose between 16, 32 and 64");
  console.log(mobileMemory)
} while ( (mobileMemory !== 16) && (mobileMemory !== 32) && (mobileMemory !== 64) );

switch (mobileMemory) {
  case 16:
    var mobilePrice = 200
    break;
  case 32:
    var mobilePrice = 300
    break;
  case 64:
    var mobilePrice = 400
    break;
  default:
    alert('Fatal Error!');
}

do {
  var mobileColor = prompt("Choose color You like between black, white and gold").toLowerCase();
  console.log(mobileColor);
} while ( (mobileColor != "black") && (mobileColor != "gold") && (mobileColor != "white") );

var mobile = document.getElementById('mobile');
var price=document.createElement('span');
price.innerHTML = "$" + mobilePrice;
var image=document.createElement('img');

switch (mobileColor) {
  case "black":
    image.src='img/black.png';
    break;
  case "gold":
    image.src='img/gold.png';
    break;
  case "white":
    image.src='img/white.png';
    break;
  default:
    alert('Fatal Error!');
}

// var firstChild = mobile.firstChild;
// mobile.insertBefore(image, firstChild);
mobile.appendChild(image);
mobile.appendChild(price);
