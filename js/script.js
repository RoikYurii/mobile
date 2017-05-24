"use strict"

// var mobileMemory;
// var mobileColor;
// var mobilePrice;
//
// do {
//   var mobileMemory = +prompt("How many memory do You need? Choose between 16, 32 and 64");
//   console.log(mobileMemory)
// } while ( (mobileMemory !== 16) && (mobileMemory !== 32) && (mobileMemory !== 64) );
//
// switch (mobileMemory) {
//   case 16:
//     var mobilePrice = 200
//     break;
//   case 32:
//     var mobilePrice = 300
//     break;
//   case 64:
//     var mobilePrice = 400
//     break;
//   default:
//     alert('Fatal Error!');
// }
//
// do {
//   var mobileColor = prompt("Choose color You like between black, white and gold").toLowerCase();
//   console.log(mobileColor);
// } while ( (mobileColor != "black") && (mobileColor != "gold") && (mobileColor != "white") );
//
// var mobile = document.getElementById('mobile');
// var price=document.createElement('span');
// price.innerHTML = "$" + mobilePrice;
// var image=document.createElement('img');
//
// switch (mobileColor) {
//   case "black":
//     image.src='img/black.png';
//     break;
//   case "gold":
//     image.src='img/gold.png';
//     break;
//   case "white":
//     image.src='img/white.png';
//     break;
//   default:
//     alert('Fatal Error!');
// }
//
// // var firstChild = mobile.firstChild;
// // mobile.insertBefore(image, firstChild);
// mobile.appendChild(image);
// mobile.appendChild(price);


var mobilePrice = 0;
var mobileColor = '';
var mobileMemory = 0;
var loopExit = false;
var confirmRes = false;

var mobilePrice_list = [200, 300, 400];
var mobileColor_list = ['black', 'gold', 'white'];
var mobileMemory_list = [16, 32, 64];

do {
  var mobileMemory = +prompt('Enter memory. Choose between 16, 32, 64:');

  for (var i = 0; i < mobileMemory_list.length; i++) {
    console.log("mobileMemory_list_item=" + mobileMemory_list[i]);
    if (mobileMemory === mobileMemory_list[i]) {
      var loopExit = true;
    };
  };

  if (loopExit === false) {
    if (mobileMemory < 24 && mobileMemory > 0)  {
      console.log(mobileMemory);
      var confirmRes = confirm("Do you mean 16?");
      if (confirmRes === true) {
        var mobileMemory = 16;
        var loopExit = true;
        break;
      };
    }
    else if (mobileMemory >= 24 && mobileMemory < 48) {
      var confirmRes = confirm("Do you mean 32?");
      if (confirmRes === true) {
        var mobileMemory = 32;
        var loopExit = true;
        break;
      };
    }
    else if (mobileMemory >= 48) {
      var confirmRes = confirm("Do you mean 64?");
      if (confirmRes === true) {
        var mobileMemory = 64;
        var loopExit = true;
        break;
      };
    }
    else {
      alert("Choose between 16, 32, 64!");
    };
  };
} while (!loopExit);


console.log(mobileMemory);

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
};

while ( (mobileColor !== "black") && (mobileColor !== "gold") && (mobileColor !== "white") ) {
  var mobileColor = prompt("Choose color You like between black, white and gold");
  console.log(mobileColor);
}

mobileColor.toLowerCase();
var mobile = document.getElementById('mobile');
var price=document.createElement('span');
price.innerHTML = "$" + mobilePrice;
var image=document.createElement('img');
image.src='img/' + mobileColor + '.png';
var firstChild = mobile.firstChild;
mobile.insertBefore(image, firstChild);
mobile.appendChild(image);
mobile.appendChild(price);












// !!!!!!!!!!!!!!!!!!!!!!!
