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

  //set the number of nav items
  const navItemNum = 4;

  let i = 0;
  //build the nav items
  while (i < navItemNum) {
    let navItem = buildElement("li", "nav-" + i, ["nav-item"], "");
    let navLink = buildElement("a", "nav-link-" + i, ["nav-link"], "");
    let navLinkSpan = buildElement("span", "", ["link-text"], "Example " + i);
    navMenu.appendChild(navItem);
    navItem.appendChild(navLink);
    navLink.appendChild(navLinkSpan);
    i++;
  }
  document.body.append(navBar);

  //TODO edit below so that the span does not get overwritten.
  //edit the navitems
  let x = document.getElementById("nav-link-0");
  console.log(x);
  x.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>';
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
