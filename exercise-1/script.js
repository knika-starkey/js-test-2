let pictures = {};
window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = show;
  }
  console.log(pictures);
};
function show(event) {
  let image = event.target;
  image.style.top = "400px";
  alert(image.dataset.name);

  setTimeout(() => {
    image.style.top = "10px";
  }, 1500);
}
