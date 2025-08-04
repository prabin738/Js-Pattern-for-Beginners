let age = document.getElementById("input");
let checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", function () {
  const ageValue = Number(age.value);
  if (ageValue >= 18) {
    alert("Hurray");
  } else {
    alert("sorry");
  }
});

// let age = prompt("Enter your Age:");

// if (age >= 18) {
//   alert("hurray");
// } else {
//   alert("sorry");
// }
