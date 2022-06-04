/* function to set active to navbar link */
const navBar = document.querySelectorAll("header nav ul.menu li a");
for (let i = 0, length = navBar.length; i < length; i++) {
  navBar[i].onclick = function () {
    var findActive = document.querySelector(".active");
    if (findActive) findActive.classList.remove("active");
    this.parentNode.classList.add("active");
  };
}

/* function for shrinking the header and setting its opacity 
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

// add squares

document
  .querySelector("#challenge-about-me")
  .insertAdjacentHTML(
    "afterbegin",
    '<div class="square1"></div><div class="square2"></div>'
  );

// add span to slogan-title
const sloganSelector = document.querySelector(".site-slogan");

let wordSelector = "";
wordSelector += "<span class='site-slogan-bold'>";
wordSelector += sloganSelector.textContent.substring(0, 5);
wordSelector += "</span>";
wordSelector += sloganSelector.textContent.substring(5, 10);

sloganSelector.innerHTML = wordSelector;
