let cookies: any = 0;
let CookiespsDisplay: any = 0;
let cursors: Array<number> = [];
let cursor: any = 0;
let cursorCost: number = 10;
let grandmas: any = 0;
let grandmaCost: number = 100;
let farms: Array<number> = [];
let farm: any = 0;
let farmCost: number = 1100;

const CookieDisplay: any = document.querySelector("#CookieDisplay");
const CpsDisplay: any = document.querySelector("#CookiesPerSecond");
const CursorDisplay: any = document.querySelector("#CursorDisplay");
const GrandmaDisplay: any = document.querySelector("#GrandmaDisplay");
const FarmDisplay: any = document.querySelector("#FarmDisplay");

/*const loadSave = localStorage.getItem("cookieDatas");

if (loadSave) {
  const parseJSON = JSON.parse(loadSave);
  cookies = parseJSON.cookies;
  grandmas = parseJSON.grandmas;
  grandmaCost = parseJSON.grandmaCost;
  farms = parseJSON.farms;
  farm = parseJSON.farm;
  farmCost = parseJSON.farmCost;
  CookieDisplay.textContent = cookies;
  GrandmaDisplay.textContent = grandmas;
  FarmDisplay.textContent = farm;
}*/

setInterval(() => {
  cps();
}, 1000);

setInterval(() => {
  cursorCps();
}, 10000);

function UpdateCookie() {
  cookies++;
  CookieDisplay.textContent = cookies;
  //saveData();
}

function BuyCursor() {
  if (cookies >= cursorCost) {
    cursors.push(1);
    cursor++;
    cookies -= cursorCost;
    cursorCost += 2;
    CookieDisplay.textContent = cookies;
    CursorDisplay.textContent = cursor;
    ShowCps();
    //saveData();
  } else if (cookies < cursorCost) {
    alert("You dont have enough cookies");
  }
}

function BuyGrandma() {
  if (cookies >= grandmaCost) {
    grandmas++;
    cookies -= grandmaCost;
    grandmaCost += 15;
    CookieDisplay.textContent = cookies;
    GrandmaDisplay.textContent = grandmas;
    ShowCps();
    //saveData();
  } else if (cookies < grandmaCost) {
    alert("You dont have enough cookies");
  }
}

function BuyFarm() {
  if (cookies >= farmCost) {
    farms.push(1);
    cookies -= farmCost;
    farmCost += 250;
    farm++;
    CookieDisplay.textContent = cookies;
    FarmDisplay.textContent = farm;
    ShowCps();
    //saveData();
  } else if (cookies < farmCost) {
    alert("You dont have enough cookies");
  }
}

const cps = () => {
  cookies += grandmas;
  farms.forEach(() => {
    cookies += 10;
  });
  CookieDisplay.textContent = cookies;
  //saveData();
};

const cursorCps = () => {
  cursors.forEach(() => {
    cookies += 1;
  });
  CookieDisplay.textContent = cookies;
};

const ShowCps = () => {
  CookiespsDisplay = 0;
  cursors.forEach(() => {
    CookiespsDisplay += 1 / 10;
  });
  CookiespsDisplay + grandmas;
  farms.forEach(() => {
    CookiespsDisplay + 10;
  });
  CpsDisplay.innerText = CookiespsDisplay.toFixed(1);
};

/*function saveData() {
  localStorage.setItem(
    "cookieDatas",
    JSON.stringify({ cookies, grandmas, grandmaCost, farms, farm, farmCost, cursors, cursor, curserCost })
  );
}*/