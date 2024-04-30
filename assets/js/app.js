window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
});
