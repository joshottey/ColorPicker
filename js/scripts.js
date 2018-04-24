/* ***  onload & random color button *** */
function randColor() {
  var myValues = [];
  for (j = 0; j < 3; j++) {
    myValues.push(Math.floor(Math.random() * 256));
  }

  for (i = 0; i < 3; i++) {
    document.getElementsByClassName("rgb-number")[i].innerHTML = myValues[i];
    document.getElementsByTagName("input")[i].value = myValues[i];
  }
  document.getElementById("myRGB").style.backgroundColor =
    "rgb(" + myValues + ")";

  document.getElementById("myHex").innerHTML =
    "#" + convertToHex(myValues[0], myValues[1], myValues[2]);
}

/* ***  conversion to hex *** */
function convertToHex(r, g, b) {
  var myHex = "";

  for (var j = 0; j < arguments.length; j++) {
    var amount = [(arguments[j] - arguments[j] % 16) / 16, arguments[j] % 16];

    for (var i = 0; i < amount.length; i++) {
      if (amount[i] > 9) {
        switch (amount[i]) {
          case 10:
            amount[i] = "A";
            break;
          case 11:
            amount[i] = "B";
            break;
          case 12:
            amount[i] = "C";
            break;
          case 13:
            amount[i] = "D";
            break;
          case 14:
            amount[i] = "E";
            break;
          case 15:
            amount[i] = "F";
        }
      } else amount[i] = amount[i];
    }

    myHex += amount.join("");
  }

  return myHex;
}

/* *** event listeners *** */
var myR = document.getElementById("r"),
    myG = document.getElementById("g"),
    myB = document.getElementById("b"),
    randBtn = document.getElementById("myRand");

myR.addEventListener("input", onSlide);
myG.addEventListener("input", onSlide);
myB.addEventListener("input", onSlide);
randBtn.addEventListener("click", randColor);


/* *** slider event function *** */
function onSlide() {

  //update color values
  document.getElementsByClassName("rgb-number")[0].innerHTML = myR.value;
  document.getElementsByClassName("rgb-number")[1].innerHTML = myG.value;
  document.getElementsByClassName("rgb-number")[2].innerHTML = myB.value;

  //update color swatch
  document.getElementById("myRGB").style.backgroundColor =
    "rgb("+myR.value+","+myG.value+","+myB.value+")";

  //update hex value
  document.getElementById("myHex").innerHTML =
    "#" + convertToHex(myR.value,myG.value,myB.value);
}
