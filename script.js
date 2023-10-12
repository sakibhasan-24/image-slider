const nextBtn = document.querySelector(".next");
const imgContainer = document.querySelector(".image-container");
let currentImg = 1;
nextBtn.addEventListener("click", function () {
  // next image will come

  currentImg++;
  console.log(currentImg);
  //   imgContainer.style.transform = `translateX(-${(currentImg - 1) * 55}rem)`;
});
