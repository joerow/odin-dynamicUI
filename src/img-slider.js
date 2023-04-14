import { buildElement } from "./index";

const slider = () => {
  document.body.append(buildElement("main", "", "", ""));
  const main = document.querySelector("main");
  const imageContainer = buildElement("div", "img-container", "", "");
  main.appendChild(imageContainer);
  console.log(imageContainer);
  return {};
};

export { slider };
