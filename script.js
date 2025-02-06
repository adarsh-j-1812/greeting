let imag = document.querySelectorAll(".imag");
let posi = [1, -310, 0, 310,512];
Array.from(imag).forEach((e) => {
  let alts = e.getAttribute("id");
  let index = alts.split("-")[1];
  e.style.left =
    window.innerwidht / 2 -
    e.getBoundingClientRect().width / 2 +
    posi[index] +
    "px";
});

function nextSlide() {
  let firstelement = posi.shift();
  posi.push(firstelement);
  for (let i = 0; i < posi.length; i++) {
    const e = imag[i];
    e.style.zIndex = "1";
    e.style.scale = "0.7";
    e.style.left =
      window.innerwidht / 2 -
      e.getBoundingClientRect().width / 2 +
      posi[i] +
      "px";
    if (posi[i] === 0) {
      e.style.zIndex = "9";
      e.style.scale = "1.4";
      // e.style.top = (((window.innerHeight-370)/2))+'px'
    }
  }
}

function prevSlide() {
  let firstelement = posi.pop();
  posi.unshift(firstelement);
  for (let i = 0; i < posi.length; i++) {
    const e = imag[i];
    e.style.zIndex = "1";
    e.style.scale = "0.7";
    e.style.left =
      window.innerwidht / 2 -
      e.getBoundingClientRect().width / 2 +
      posi[i] +
      "px";
    if (posi[i] === 0) {
      e.style.zIndex = "9";
      e.style.scale = "1.4";
      // e.style.top = (((window.innerHeight-370)/2))+'px'
    }
  }
}
