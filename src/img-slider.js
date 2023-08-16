import { buildElement } from "./index";
import alexander from ".//images/alexander-london-mJaD10XeD7w-unsplash.jpg";
import lloyd from ".//images/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg";
import zoe from ".//images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg";
/* import nachosImage from "./nachos.png";
import tacosImage from "./tacos.png"; */

const slider = () => {
  document.body.append(buildElement("main", "img-slider", "", ""));
  const main = document.querySelector("main");
  main.appendChild(
    buildElement(
      "button",
      "scroll-back",
      ["scroller"],
      '<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>'
    )
  );
  let imgWindow = main.appendChild(buildElement("div", "img-window", "", ""));
  imgWindow.appendChild(buildElement("div", "img-holder", "", ""));
  main.appendChild(
    buildElement(
      "button",
      "scroll-forward",
      ["scroller"],
      '<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>'
    )
  );

  const loadImages = () => {
    let imgHolder = document.getElementById("img-holder");
    let image1 = new Image();
    image1.src = alexander;
    image1.classList.add("images");
    image1.id = "image1";
    imgHolder.appendChild(
      buildElement("div", "img-cont-1", ["image-container"])
    );
    document.getElementById("img-cont-1").appendChild(image1);

    let image2 = new Image();
    image2.src = lloyd;
    image2.classList.add("images");
    image2.id = "image2";
    imgHolder.appendChild(
      buildElement("div", "img-cont-2", ["image-container"])
    );
    document.getElementById("img-cont-2").appendChild(image2);

    let image3 = new Image();
    image3.src = zoe;
    image3.classList.add("images");
    image3.id = "image3";
    imgHolder.appendChild(
      buildElement("div", "img-cont-3", ["image-container"])
    );
    document.getElementById("img-cont-3").appendChild(image3);
  };
  loadImages();

  //set the next image function
  let next = document.getElementById("scroll-forward");
  next.onclick = function () {
    let imageWindow = document.getElementById("img-window");
    let newWidth =
      document.getElementById("img-cont-1").clientWidth.toString() + "px";
    console.log(newWidth);
    console.log("next clicked");
    console.log(imageWindow);
    imageWindow.style.width = newWidth;
  };
  //set the previous next image function
  let back = document.getElementById("scroll-back");
  back.onclick = function () {
    console.log("back clicked");
  };
};

/* const setWidth = () => {
  let imageWindow = document.getElementById("img-window");
  let newWidth =
    document.getElementById("image1").clientWidth.toString() + "px";
  console.log(newWidth);
  console.log(imageWindow);
  //imageWindow.style.width = newWidth;
}; */

export { slider };
