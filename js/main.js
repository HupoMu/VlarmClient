// pop-up tabble
function showPopup() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".tabble").style.display = "block";
}
function hidePopup() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".tabble").style.display = "none";
}
// Text Replacement
function hidefree() {
  document.querySelector(".free").style.display = "block";
  document.querySelector(".trial").style.display = "none";
  document.querySelector(".basic").style.display = "none";
  document.querySelector(".advanced").style.display = "none";
  document.querySelector(".pro").style.display = "none";
  document.querySelector(".freetext").style.display = "block";
  document.querySelector(".trialtext").style.display = "none";
  document.querySelector(".basictext").style.display = "none";
  document.querySelector(".advancedtext").style.display = "none";
  document.querySelector(".protext").style.display = "none";
}
function hidetrial() {
  document.querySelector(".free").style.display = "none";
  document.querySelector(".trial").style.display = "block";
  document.querySelector(".basic").style.display = "none";
  document.querySelector(".advanced").style.display = "none";
  document.querySelector(".pro").style.display = "none";
  document.querySelector(".freetext").style.display = "none";
  document.querySelector(".trialtext").style.display = "block";
  document.querySelector(".basictext").style.display = "none";
  document.querySelector(".advancedtext").style.display = "none";
  document.querySelector(".protext").style.display = "none";
}
function hidebasic() {
  document.querySelector(".free").style.display = "none";
  document.querySelector(".trial").style.display = "none";
  document.querySelector(".basic").style.display = "block";
  document.querySelector(".advanced").style.display = "none";
  document.querySelector(".pro").style.display = "none";
  document.querySelector(".freetext").style.display = "none";
  document.querySelector(".trialtext").style.display = "none";
  document.querySelector(".basictext").style.display = "block";
  document.querySelector(".advancedtext").style.display = "none";
  document.querySelector(".protext").style.display = "none";
}
function hideadvance() {
  document.querySelector(".free").style.display = "none";
  document.querySelector(".trial").style.display = "none";
  document.querySelector(".basic").style.display = "none";
  document.querySelector(".advanced").style.display = "block";
  document.querySelector(".pro").style.display = "none";
  document.querySelector(".freetext").style.display = "none";
  document.querySelector(".trialtext").style.display = "none";
  document.querySelector(".basictext").style.display = "none";
  document.querySelector(".advancedtext").style.display = "block";
  document.querySelector(".protext").style.display = "none";
}
function hidepro() {
  document.querySelector(".free").style.display = "none";
  document.querySelector(".trial").style.display = "none";
  document.querySelector(".basic").style.display = "none";
  document.querySelector(".advanced").style.display = "none";
  document.querySelector(".pro").style.display = "block";
  document.querySelector(".freetext").style.display = "none";
  document.querySelector(".trialtext").style.display = "none";
  document.querySelector(".basictext").style.display = "none";
  document.querySelector(".advancedtext").style.display = "none";
  document.querySelector(".protext").style.display = "block";
}
