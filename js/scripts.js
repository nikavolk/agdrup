/* function to set navbar active link to navbar link upon
clicking it */

const navBar = document.querySelectorAll("header nav ul.menu li a");
for (let i = 0, length = navBar.length; i < length; i++) {
  navBar[i].onclick = function () {
    const findActive = document.querySelector(".active");
    if (findActive) findActive.classList.remove("active");
    this.parentNode.classList.add("active");
  };
}

/* function for setting navbar opacity 
after user scrolls down by 120px */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const selectHeader = document.querySelector("header").style;
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    selectHeader.backgroundColor = "rgba(0,0,0,1)";
  } else {
    selectHeader.backgroundColor = "rgba(0,0,0,0.5)";
  }
}

/*  hamburger menu with animation */
document
  .querySelector("#block-adchallenge-branding")
  .insertAdjacentHTML(
    "beforeEnd",
    '<div class="nav-hamburger-menu" onclick="animateNav(this)"><div class="menu-line1"></div><div class="menu-line2"></div><div class="menu-line3"></div></div>'
  );

function animateNav(arg) {
  /* animate hamburger button */
  arg.classList.toggle("animate");

  /* show / hide navbar links */
  const menuSelector = document.querySelector(
    "#block-adchallenge-main-menu .menu"
  );
  if (menuSelector.style.display === "block") {
    menuSelector.style.display = "none";
  } else {
    menuSelector.style.display = "block";
  }
}

/* add span to slogan-title */
const sloganSelector = document.querySelector(".site-slogan");

let wordSelector = "";
wordSelector += "<span class='site-slogan-bold'>";
wordSelector += sloganSelector.textContent.substring(0, 5);
wordSelector += "</span>";
wordSelector += sloganSelector.textContent.substring(5, 10);

sloganSelector.innerHTML = wordSelector;

/* background squares */

document
  .querySelector("#challenge-about-me")
  .insertAdjacentHTML(
    "afterBegin",
    '<div class="square1"></div><div class="square2"></div>'
  );
