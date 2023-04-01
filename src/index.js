import "./style.css";

function buildElement(elementType, id, classList, innerHTML) {
  const element = document.createElement(elementType);
  if (id === undefined) {
    id = "";
  }
  if (classList === undefined) {
    classList = "";
  }
  if (innerHTML === undefined) {
    innerHTML = "";
  }
  element.id = id;
  element.classList.add(...classList);
  element.innerHTML = innerHTML;
  return element;
}
document.body.append(buildElement("div", "main", ["container"], ""));

const main = document.getElementById("main");

function buildNav(NumberOfNavItems, AppendId) {
  if (NumberOfNavItems <= 1) {
    console.log("not enough nav items");
    return;
  }
  if (AppendId === undefined) {
    console.log("need to add an ID where the nav will append");
    return;
  }
  const parent = document.getElementById(AppendId);
  const navBar = buildElement(
    "div",
    "nav-bar-container",
    ["nav-bar"],
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />'
  );
  const navMenu = buildElement(
    "button",
    "menu-icon",
    "",
    '<span class="material-symbols-outlined">menu</span>'
  );
  navMenu.onclick = function () {
    console.log("clicked");
  };
  /*   navMenu.onmouseover = function () {
    console.log("mouse over");
  };
  navMenu.onmouseleave = function () {
    console.log("mouse left");
  }; */
  navBar.append(navMenu);
  parent.append(navBar);
}

buildNav(2, "main");
