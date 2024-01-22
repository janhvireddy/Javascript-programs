const addUserElement = document.getElementById("add-user");
const doubleElement = document.getElementById("double");
const showmillionaires = document.getElementById("show-millionaires");
const sortElement = document.getElementById("sort");
const calculatewealth = document.getElementById("calculate-wealth");
const mainElement = document.getElementById("main");
fetchData();

let data = [];

async function fetchData() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}
const addData = (obj) => {
  data.push(obj);
};
function updateDOM(providedData = data) {
  mainElement.innerHTML =
    "<h2><strong>Person</strong><strong>Wealth</strong></h2>";
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}
//Format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}
//calculate wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}
// filter only millionaires
function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
// double everyone money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}
// Event Listeners
addUserElement.addEventListener("click", fetchData);
doubleElement.addEventListener("click", doubleMoney);
sortElement.addEventListener("click", sortByRichest);
showmillionaires.addEventListener("click", showMillionaires);
calculatewealth.addEventListener("click", calculateWealth);
