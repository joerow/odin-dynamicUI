import { buildElement } from "./index";
import alexander from ".//images/alexander-london-mJaD10XeD7w-unsplash.jpg";
import lloyd from ".//images/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg";
import zoe from ".//images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg";
/* import nachosImage from "./nachos.png";
import tacosImage from "./tacos.png"; */

const slider = () => {
  document.body.append(buildElement("main", "img-slider", "", ""));
  const main = document.querySelector("main");
  main.appendChild(buildElement("button", "scroll-back", ["scroller"], "Back"));
  const imgWindows = main.appendChild(
    buildElement("div", "img-window", "", "")
  );
  imgWindows.appendChild(buildElement("div", "img-holder", "", "t"));
  main.appendChild(
    buildElement("button", "scroll-forward", ["scroller"], "Forward")
  );

  let imgHolder = document.getElementById("img-holder");
  let image1 = new Image();
  image1.src = alexander;
  image1.classList.add("images");
  imgHolder.appendChild(image1);

  let image2 = new Image();
  image2.src = lloyd;
  image2.classList.add("images");
  imgHolder.appendChild(image2);

  let image3 = new Image();
  image3.src = zoe;
  image3.classList.add("images");
  imgHolder.appendChild(image3);
};

export { slider };
