const slideContainer = document.querySelector(".slider");
const slideItem = document.querySelector(".slide");
const prevButton = document.querySelectorAll(".button__btn_left");
const nextButton = document.querySelectorAll(".button__btn_right");

nextButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const slideWidth = slideItem.clientWidth;
    slideContainer.scrollLeft += slideWidth;
  });
});

prevButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const slideWidth = slideItem.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
  });
});

slideContainer.addEventListener("wheel", (e) => {
  slideContainer.scrollBy({
    left: e.deltaY < 0 ? -70 : 70,
  });
  e.preventDefault();
});
