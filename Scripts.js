
var fontSize = 1.0;

function increaseFontSize(){
  if(fontSize<1.41)
    fontSize = fontSize + 0.1;
  else
    window.alert("This is the maximum font size");

  var container = document.getElementsByClassName("container");
  container[0].style.fontSize = fontSize+"em";

  document.getElementById("currentFontSize").innerHTML =
    "Adjust Font Size (Current - " + parseInt(fontSize*100)+"%)";
}

function decreaseFontSize(){
  if(fontSize>0.6)
    fontSize = fontSize - 0.1;
  else
    window.alert("This is the minimum font size");

  var container = document.getElementsByClassName("container");
  container[0].style.fontSize = fontSize+"em";

  document.getElementById("currentFontSize").innerHTML =
    "Adjust Font Size (Current - " + parseInt(fontSize*100)+"%)";
}
