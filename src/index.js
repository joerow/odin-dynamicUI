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
document.body.append(buildElement("div", "main", ["container"], "Sample text"));

const main = document.getElementById("main");
