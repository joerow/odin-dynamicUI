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

function buildNav() {
  const navBar = buildElement(
    "nav",
    "",
    ["navbar"],
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />'
  );
  const navMenu = buildElement("ul", "", ["navbar-nav"], "");
  navBar.appendChild(navMenu);

  //set the number of nav items including logo
  const navItemNum = 5;

  //set the nav item icons
  const navIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>',
  ];

  //set the nav link text
  const navLinkText = ["Logo", "Link 1", "Link 2", "link 3", "Settings"];

  //set the nav link hrefs
  const navLinkHref = [
    "http://localhost:8080/",
    "http://localhost:8080/",
    "http://localhost:8080/",
    "http://localhost:8080/",
    "http://localhost:8080/",
  ];

  //build the nav items
  let i = 0;
  while (i < navItemNum) {
    let navItem = null;
    if (i === 0) {
      navItem = buildElement("li", "nav-" + i, ["logo"], "");
    } else {
      navItem = buildElement("li", "nav-" + i, ["nav-item"], "");
    }
    let navLink = buildElement("a", "nav-link-" + i, ["nav-link"], navIcons[i]);
    navLink.href = navLinkHref[i];
    let navLinkSpan = buildElement("span", "", ["link-text"], navLinkText[i]);
    navMenu.appendChild(navItem);
    navItem.appendChild(navLink);
    navLink.appendChild(navLinkSpan);
    i++;
  }
  document.body.append(navBar);
}

function buildMain() {
  document.body.append(buildElement("main", "", "", ""));
  const main = document.querySelector("main");
  main.appendChild(
    buildElement("h1", "", "", "This is a typical title on the page")
  );
  main.appendChild(
    buildElement(
      "p",
      "",
      "",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor at lorem congue, ut malesuada lorem porttitor. Suspendisse at massa commodo, scelerisque ipsum sed, rutrum tellus. Phasellus facilisis sed nisi a pulvinar. Pellentesque vestibulum feugiat tellus, ut ultrices metus hendrerit id. Fusce egestas mi est, at ultrices orci commodo quis. Integer in pharetra nibh, tempor lobortis tellus. Praesent eros neque, aliquam eget finibus at, ultrices id sapien. Mauris vitae lacus nisi.Donec iaculis, dolor in pharetra hendrerit, nunc eros viverra nisi, sed scelerisque elit velit ut dolor. Cras fringilla odio lacus, placerat elementum felis porttitor non. Proin diam est, rutrum sit amet consectetur id, viverra ut ipsum. Etiam nec tincidunt ex. Duis cursus viverra dignissim. Quisque nunc lacus, cursus vitae velit vitae, tempus auctor lorem. Phasellus egestas metus malesuada mauris ultrices venenatis. Etiam a placerat lorem.Aliquam semper orci et justo pellentesque, a aliquet nulla dapibus. Nullam a tristique turpis, ac scelerisque metus. Sed malesuada tempus enim volutpat pulvinar. Integer nisi ligula, vulputate a dignissim in, dapibus congue purus. Curabitur mollis mauris at ligula accumsan, ut luctus enim commodo. Proin bibendum ante lacus, eu dapibus enim semper id. Sed volutpat auctor augue, sed vehicula neque gravida at.  Sed convallis dictum magna, ut placerat tortor pretium at. Nunc lacinia sit amet nisi vitae semper. Maecenas vitae enim eu augue rhoncus efficitur. Curabitur et purus tristique, dignissim erat vitae, mollis eros. Vivamus tincidunt viverra tortor vel sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eleifend ipsum quam, ac porttitor magna tempus eu. Nam ex magna, venenatis eu lacus in, sodales semper felis. Donec ut rutrum lectus. Etiam posuere sagittis nisl non convallis. Vestibulum faucibus ligula risus, id tempor nisl ultricies ut. In volutpat, sapien at ultricies sodales, arcu turpis rhoncus lorem, ac hendrerit quam elit ac dolor. Integer et ligula a dui gravida ornare. Duis sit amet ornare risus. Proin non scelerisque justo. Mauris non tellus elit.Vestibulum tempus quis metus id congue. Sed in orci sed ligula pellentesque ultricies. Vivamus eu cursus eros. Proin egestas, justo vitae dignissim condimentum, ipsum felis bibendum dui, vel aliquet risus turpis sed dui. Maecenas sagittis nulla metus, tincidunt laoreet erat consequat non. Phasellus vel est ut massa ornare posuere ut sed erat. Mauris eu rhoncus massa. Nam sed lacus feugiat, cursus elit fermentum, placerat sem. Maecenas ac ullamcorper diam, non sollicitudin arcu. Donec sem erat, porta nec dui id, maximus vehicula urna. Quisque eu dapibus est, sit amet maximus tellus. Donec rhoncus urna mattis efficitur suscipit. Curabitur accumsan nulla vitae lorem dignissim imperdiet. "
    )
  );
}

buildNav();
buildMain();
