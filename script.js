const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const imgContainer = document.querySelector(".image-container");
const allImg = document.querySelectorAll(".image-container img");

let currentImg = 1;
nextBtn.addEventListener("click", function () {
  // next image will come
  currentImg++;
  if (currentImg > allImg.length) {
    currentImg = 1;
  }

  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 50}rem)`;
});
prevBtn.addEventListener("click", function () {
  if (currentImg === 1) {
    currentImg = allImg.length;
  }
  currentImg--;
  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 50}rem)`;
});
