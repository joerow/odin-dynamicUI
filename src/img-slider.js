import { buildElement } from "./index";

const slider = () => {
  document.body.append(buildElement("main", "img-slider", "", ""));
  const main = document.querySelector("main");
  main.appendChild(buildElement("button", "scroll-back", ["scroller"], "Back"));
  main.appendChild(
    buildElement("div", "img-window", "", "Placeholder text for the image")
  );
  main.appendChild(
    buildElement("button", "scroll-forward", ["scroller"], "Forward")
  );
};

export { slider };
