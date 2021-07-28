const images = document.querySelectorAll(".product-image .inner");

images.forEach((i) => {
  const firstImg = i.querySelector(".wp-post-image");
  const secondImg = i.querySelector(".hover-image");

  if (
    !!firstImg &&
    !!secondImg &&
    firstImg.classList.contains("wp-post-image") &&
    secondImg.classList.contains("hover-image")
  ) {
    firstImg.classList.remove("wp-post-image");
    firstImg.classList.add("hover-image");

    secondImg.classList.remove("hover-image");
    secondImg.classList.add("wp-post-image");
  }
});
