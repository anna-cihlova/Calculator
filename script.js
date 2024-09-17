window.addEventListener("click", (e) => e.preventDefault());

// Selectors
let billAmt = document.querySelector(".billAmt");
let tip = document.querySelectorAll(".tip");
let tipAmt;
let numOfPeople = document.querySelector(".numOfPeople");
const minusSign = document.querySelector(".minus");
const plusSign = document.querySelector(".plus");
const calculateBtn = document.querySelector(".calculateBtn");
const reloadBtn = document.querySelector(".reloadBtn");

// Selectors for Visualizing Results
const billSum = document.querySelector(".billSum");
const tipSum = document.querySelector(".tipSum");
const numOfPeopleSum = document.querySelector(".numOfPeopleSum");
const totalSum = document.querySelector(".totalSum");

// Minus and Plus Signs Functionality
minusSign.addEventListener("click", function () {
  if (numOfPeople.value > 0) numOfPeople.value--;
});
plusSign.addEventListener("click", function () {
  numOfPeople.value++;
});

// Looping through Tip Amount
tip.forEach((item) =>
  item.addEventListener("click", function () {
    item.style.backgroundColor = "#0e8951";
    item.style.color = "white";
    tipAmt = item.value;
    return tipAmt;
  })
);

// Calculating Bill
const calculateBill = function () {
  if (billAmt.value && tipAmt && numOfPeople.value > 0) {
    numOfPeople = numOfPeople.value;
    billAmt = Number(billAmt.value);
    let finalAmt = (billAmt * tipAmt + billAmt) / numOfPeople;
    billSum.textContent = `$${Math.round(finalAmt * 100) / 100}`;
    totalSum.textContent = `$${billAmt}`;
    tipSum.textContent = `$${billAmt * tipAmt}`;
  } else {
    alert("💥 Ups, please, fill out missing information 💥");
  }
};

calculateBtn.addEventListener("click", calculateBill);
reloadBtn.addEventListener("click", () => window.location.reload());
